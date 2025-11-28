SPOTIFY_EVENT="com.spotify.client.PlaybackStateChanged"

sketchybar_bottom --add event spotify_event "$SPOTIFY_EVENT"

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
    --subscribe music spotify_event mouse.clicked

sketchybar_bottom --add item music.next center \
    --set music.next \
    drawing=off \
    label.drawing=off \
    icon=$PLAYER_NEXT \
    background.color=$PLAYER_COLOR \
    script="$PLUGIN_DIR/music.sh" \
    --subscribe music.next mouse.clicked
