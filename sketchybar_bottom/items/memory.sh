sketchybar_bottom --add item memory right \
    --set memory \
    label="00%" \
    icon=$MEMORY \
    update_freq=2 \
    background.color=$MEMORY_COLOR \
    background.border_color=$MEMORY_COLOR \
    script="$PLUGIN_DIR/memory.sh"
