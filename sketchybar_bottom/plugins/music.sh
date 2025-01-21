source "$CONFIG_DIR/settings/icons.sh"

media_change() {
    PLAYER="$(echo "$INFO" | jq -r '.app')"
    PLAYERSTATE="$(echo "$INFO" | jq -r '.state')"
    CURRENTARTIST="$(echo "$INFO" | jq -r '.artist')"
    CURRENTSONG="$(echo "$INFO" | jq -r '.title')"

    if [[ "$PLAYER" == "Spotify" ]]; then
        ARGS=(drawing=on)
        BUTTON_ARGS=(drawing=on)
        if [[ "$PLAYERSTATE" == "playing" ]]; then
            ARGS+=(icon=$SPOTIFY)
        else
            ARGS+=(icon=$PAUSE)
        fi
        ARGS+=(label="$CURRENTARTIST: $CURRENTSONG")
    else
        ARGS=(drawing=off)
        BUTTON_ARGS=(drawing=off)
    fi

    sketchybar_bottom --set music "${ARGS[@]}" \
        --set music.next "${BUTTON_ARGS}" \
        --set music.prev "${BUTTON_ARGS}"
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
                osascript -e 'tell application "Spotify" to previous track'
                ;;
            "music.next")
                osascript -e 'tell application "Spotify" to next track'
                ;;
            "music")
                osascript -e 'tell application "Spotify" to playpause'
                ;;
        esac
        ;;
esac
