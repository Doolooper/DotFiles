source "$CONFIG_DIR/settings/icons.sh"
source "$CONFIG_DIR/settings/colors.sh"

media_change() {
    PLAYER="$(echo "$INFO" | jq -r '.app')"
    PLAYERSTATE="$(echo "$INFO" | jq -r '.state')"
    CURRENTARTIST="$(echo "$INFO" | jq -r '.artist')"
    CURRENTSONG="$(echo "$INFO" | jq -r '.title')"

    if [[ "$PLAYER" == "Spotify" || "$PLAYER" == "Podcasts" ]]; then
        ARGS=(drawing=on)
        BUTTON_ARGS=(drawing=on)
        if [[ "$PLAYERSTATE" == "playing" ]]; then
            case "$PLAYER" in
                "Spotify")
                    ARGS+=(icon="$SPOTIFY")
                    ARGS+=(background.color="$SPOTIFY_COLOR")
                    BUTTON_ARGS+=(background.color="$SPOTIFY_COLOR")
                    ;;
                "Podcasts")
                    ARGS+=(icon="$PODCAST")
                    ARGS+=(background.color="$PODCAST_COLOR")
                    BUTTON_ARGS+=(background.color="$PODCAST_COLOR")
                    ;;
                *)
                    ARGS+=(icon=$MUISC)
                    ARGS+=(background.color="$PLAY_COLOR")
                    BUTTON_ARGS+=(background.color="$PLAY_COLOR")
                    ;;
            esac
        else
            ARGS+=(icon="$PAUSE")
        fi
        ARGS+=(label="$CURRENTARTIST: $CURRENTSONG")
    else
        ARGS=(drawing=off)
        BUTTON_ARGS=(drawing=off)
    fi

    sketchybar_bottom --set music "${ARGS[@]}" \
        --set music.next "${BUTTON_ARGS[@]}" \
        --set music.prev "${BUTTON_ARGS[@]}"
}

case "$SENDER" in
    "media_change")
        media_change
        ;;
    "space_windows_change")
        media_change
        ;;
    "mouse.clicked")
        case "$NAME" in
            "music.prev")
                nowplaying-cli previous
                ;;
            "music.next")
                nowplaying-cli next
                ;;
            "music")
                nowplaying-cli togglePlayPause
                ;;
        esac
        ;;
esac
