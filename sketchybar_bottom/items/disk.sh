sketchybar_bottom --add item disk right \
    --set disk \
    label="0.0GB" \
    icon=$HDD \
    update_freq=60 \
    background.color=$DISK_COLOR \
    script="$PLUGIN_DIR/disk.sh"
