sketchybar_bottom --add item uptime right \
    --set uptime \
    label="0d 0h 0m" \
    icon=$UPTIME \
    update_freq=60 \
    background.color=$UPTIME_COLOR \
    script="$PLUGIN_DIR/uptime.sh" \
    --subscribe uptime system_woke
