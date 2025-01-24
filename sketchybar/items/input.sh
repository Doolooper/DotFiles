sketchybar --add event input_change 'AppleSelectedInputSourcesChangedNotification' \
    --add item input right \
    --set input \
    icon=$KEYBOARD \
    background.color=$BATTERY_COLOR \
    script="$PLUGIN_DIR/input.sh" \
    --subscribe input input_change
