sketchybar --add event update_windows

sketchybar --add item front_app_watcher left \
    --set front_app_watcher \
    drawing=off \
    updates=on \
    script="$PLUGIN_DIR/front_app.sh" \
    --subscribe front_app_watcher update_windows
