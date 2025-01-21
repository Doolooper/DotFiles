source "$CONFIG_DIR/settings/icons.sh"
source "$CONFIG_DIR/settings/colors.sh"
source "$CONFIG_DIR/settings/icon_map.sh"

update_windows() {
    windows=$(aerospace list-windows --workspace focused --format "id=%{window-id},name=%{app-name}")
    sketchybar --remove '/front_app\..*/'
    IFS=$'\n' read -rd '' -a windowsArr <<< "$windows"
    for i in "${windowsArr[@]}"; do
        IFS=',' read -r -a window <<< "$i"
        app_id="${window[0]//id=/}"
        app_name="${window[1]//name=/}"
        __icon_map "${app_name}"
        app_icon="${icon_result}"
        sketchybar --add item "front_app.${app_id}" left \
            --set "front_app.${app_id}" \
            label="$app_name" \
            icon=$app_icon \
            icon.font="sketchybar-app-font:Regular:12" \
            background.color=$FRONT_APP_COLOR \
            background.border_color=$FRONT_APP_COLOR \
            click_script="aerospace focus --window-id ${app_id}"
    done
}

case $SENDER in
    "update_windows" | "forced")
        update_windows
        ;;
esac
