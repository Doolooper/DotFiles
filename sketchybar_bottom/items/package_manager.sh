sketchybar_bottom --add item homebrew right \
    --set homebrew \
    label="0" \
    icon=$PACKAGE \
    update_freq=900 \
    background.color=$PAKCAGE_MANAGER_COLOR \
    background.border_color=$PAKCAGE_MANAGER_COLOR \
    script="$PLUGIN_DIR/package_manager.sh" \
    --subscribe homebrew system_woke
