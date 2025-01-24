sketchybar --add item battery right \
    --set battery \
    label="00%" \
    icon=$BATTERY_FULL \
    update_freq=5 \
    background.color=$BATTERY_COLOR \
    script="$PLUGIN_DIR/battery.sh"
