sketchybar_bottom --add item network_up right \
    --set network_up \
    label="00.0 kbs" \
    icon=$UPLOAD \
    background.color=$NETWORK_UP_COLOR

sketchybar_bottom --add item network_down right \
    --set network_down \
    label="00.0 kbs" \
    icon=$DOWNLOAD \
    background.color=$NETWORK_DOWN_COLOR

sketchybar_bottom --add item network_watcher right \
    --set network_watcher \
    update_freq=1 \
    drawing=off \
    updates=on \
    width=0 \
    script="$PLUGIN_DIR/network.sh"
