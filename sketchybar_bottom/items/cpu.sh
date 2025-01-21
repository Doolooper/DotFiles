sketchybar_bottom --add item cpu right \
    --set cpu \
    label="00%" \
    icon=$CPU \
    update_freq=5 \
    background.color=$CPU_COLOR \
    background.border_color=$CPU_COLOR \
    script="$PLUGIN_DIR/cpu.sh"
