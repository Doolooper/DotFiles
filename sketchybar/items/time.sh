sketchybar --add item time right \
    --set time \
    label="" \
    icon=$CLOCK \
    update_freq=1 \
    background.color=$TIME_COLOR \
    background.border_color=$TIME_COLOR \
    script="$PLUGIN_DIR/time.sh"
