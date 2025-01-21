source "$CONFIG_DIR/settings/colors.sh"
source "$CONFIG_DIR/settings/icons.sh"
source "$CONFIG_DIR/settings/icon_map.sh"

selected=$(aerospace list-workspaces --focused)
ARGS=()
for sid in $(aerospace list-workspaces --all); do
    windows=$(aerospace list-windows --workspace $sid --format "name=%{app-name}")
    IFS=$'\n' read -rd '' -a windowsArr <<< "$windows"
    label=""
    for i in "${windowsArr[@]}"; do
        app_name="${i//name=/}"
        __icon_map "${app_name}"
        app_icon="${icon_result}"
        label+=$app_icon
    done
    ARGS+=(--set "space.$sid")
    if [ "$sid" = "$selected" ]; then
        ARGS+=(background.color=$SELECTED_SPACE_COLOR)
    else
        ARGS+=(background.color=$SPACE_COLOR)
    fi
    ARGS+=(label="$label")
done
sketchybar_bottom ${ARGS[@]}
