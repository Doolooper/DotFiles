sketchybar_bottom --add event aerospace_workspace_changed \
    --add event update_windows

spaces=$(aerospace list-workspaces --all)

index=0
for sid in $spaces; do
    windows=$(aerospace list-windows --workspace $sid --format "id=%{window-id}, name=%{app-name}")
    IFS=$'\n' read -rd '' -a windowsArr <<< "$windows"
    label=""
    for i in "${windowsArr[@]}"; do
        IFS=',' read -r -a window <<< "$i"
        app_id="${window[0]//id=/}"
        app_name="${window[1]// name=/}"
        __icon_map "${app_name}"
        app_icon="${icon_result}"
        label+=$app_icon
    done
    sketchybar_bottom --add item space.$sid left \
        --subscribe space.$sid aerospace_workspace_changed update_windows \
        --set space.$sid \
        label="$label" \
        label.font="sketchybar-app-font:Regular:15" \
        icon="$sid" \
        background.color=$SPACE_COLOR \
        background.width=25 \
        script="$CONFIG_DIR/plugins/space.sh $sid" \
        click_script="aerospace workspace $sid"
done
