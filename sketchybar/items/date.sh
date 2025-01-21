sketchybar --add item date right \
    --set date \
    label="" \
    icon=$CALENDAR \
    update_freq=1 \
    background.color=$DATE_COLOR \
    background.border_color=$DATE_COLOR \
    script="$PLUGIN_DIR/date.sh"
