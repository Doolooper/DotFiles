source "$CONFIG_DIR/settings/icons.sh"
source "$CONFIG_DIR/settings/constant.sh"
source "$CONFIG_DIR/settings/colors.sh"
source "$CONFIG_DIR/settings/icon_map.sh"

get_icon_from_bundle_id() {
    local bundle_id="$1"
    local app_name=""

    case "$bundle_id" in
        com.spotify.client)
            app_name="Spotify"
            ;;
        com.apple.podcasts)
            app_name="Podcasts"
            ;;
        com.apple.Safari)
            app_name="Safari"
            ;;
        app.zen-browser.zen)
            app_name="Zen"
            ;;
        org.mozilla.firefox)
            app_name="Firefox"
            ;;
        com.brave.browser)
            app_name="Brave"
            ;;
        com.apple.Music)
            app_name="Music"
            ;;
        *)
            app_name="Music"
            ;;
    esac

    __icon_map "$app_name"

    echo "$icon_result"
}

get_color_from_bundle_id() {
    local bundle_id="$1"
    local color=""

    case "$bundle_id" in
        com.spotify.client)
            color="$SPOTIFY_COLOR"
            ;;
        com.apple.podcasts)
            color="$PODCAST_COLOR"
            ;;
        com.apple.Music)
            color="$MUSIC_COLOR"
            ;;
        *)
            color="$DEFAULT_COLOR"
            ;;
    esac

    echo "$color"
}

media_change() {
    MEDIA_JSON=$(media-control get -h)
    BUNDLE_ID=$(echo "$MEDIA_JSON" | jq -r '.bundleIdentifier')
    PLAYBACK_STATE=$(echo "$MEDIA_JSON" | jq -r '.playing')
    TITLE=$(echo "$MEDIA_JSON" | jq -r '.title')
    ARTIST=$(echo "$MEDIA_JSON" | jq -r '.artist')

    if [ -z "$MEDIA_JSON" ] || [ "$MEDIA_JSON" = "null" ]; then
         ARGS=(drawing=off)
         BUTTON_ARGS=(drawing=off)
    else
         ARGS=(drawing=on)
         BUTTON_ARGS=(drawing=on)
         icon=$(get_icon_from_bundle_id "$BUNDLE_ID")
         if [ "$PLAYBACK_STATE" == "true" ]; then
            ARGS+=(icon.font="sketchybar-app-font:Regular:15")
            ARGS+=(icon=$icon)
        else
            ARGS+=(icon.font="$FONT:Regular:14.0")
            ARGS+=(icon=$PAUSE)
        fi
         color=$(get_color_from_bundle_id "$BUNDLE_ID")
         ARGS+=(background.color=$color)
         BUTTON_ARGS+=(background.color=$color)
         label="$ARTIST - $TITLE"
         ARGS+=(label="$label")
    fi

    sketchybar_bottom --set music "${ARGS[@]}" \
        --set music.next "${BUTTON_ARGS[@]}" \
        --set music.prev "${BUTTON_ARGS[@]}"
}

case "$SENDER" in
    "spotify_event")
        media_change
        ;;
        "mouse.clicked")
            case "$NAME" in
                "music.prev")
                    osascript -e 'tell application "Spotify" to play previous track'
                    ;;
                "music.next")
                    osascript -e 'tell application "Spotify" to play next track'
                    ;;
                "music")
                    osascript -e 'tell application "Spotify" to playpause'
                    ;;
        esac
            ;;
        "forced")
            media_change
            ;;
esac
