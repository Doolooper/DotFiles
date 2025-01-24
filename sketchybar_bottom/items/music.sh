sketchybar_bottom --add item music.prev center \
    --set music.prev \
    drawing=off \
    label.drawing=off \
    icon=$PLAYER_PREV \
    background.color=$PLAYER_COLOR \
    script="$PLUGIN_DIR/music.sh" \
    --subscribe music.prev mouse.clicked

sketchybar_bottom \
    --add item music center \
    --set music \
    drawing=off \
    label="" \
    label.scroll_duration=300 \
    label.max_chars=20 \
    icon=$MUSIC \
    background.color=$PLAYER_COLOR \
    updates=on \
    script="$PLUGIN_DIR/music.sh" \
    --subscribe music media_change space_windows_change mouse.clicked

sketchybar_bottom --add item music.next center \
    --set music.next \
    drawing=off \
    label.drawing=off \
    icon=$PLAYER_NEXT \
    background.color=$PLAYER_COLOR \
    script="$PLUGIN_DIR/music.sh" \
    --subscribe music.next mouse.clicked
