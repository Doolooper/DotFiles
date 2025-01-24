source "$CONFIG_DIR/settings/icons.sh"
source "$CONFIG_DIR/settings/colors.sh"

volume_change() {
    device=$(SwitchAudioSource -t output -c)
    case $INFO in
        [6-9][0-9] | 100)
            ICON=$VOLUME_100
            ;;
        [3-5][0-9])
            ICON=$VOLUME_66
            ;;
        [1-2][0-9])
            ICON=$VOLUME_33
            ;;
        [1-9])
            ICON=$VOLUME_10
            ;;
        0)
            ICON=$VOLUME_0
            ;;
        *)
            ICON=$VOLUME_100
            ;;
    esac

    INFO=$(printf "%02d" $INFO)
    if [[ "$device" == *"AirPods"* ]]; then
        ICON=$AIRPOD
    elif [[ "$device" == "External Headphones" ]]; then
        ICON=$HEADPHONES
    fi

    sketchybar --set volume icon=$ICON label=$INFO \
        --set volume.slider slider.percentage=$INFO
}

toggle_popup() {
    popup_status=$(sketchybar --query volume.bracket popup.drawing | jq .popup.drawing)
    popup_status=$(echo "$popup_status" | sed 's/"//g')

    if [[ $popup_status == "off" ]]; then
        current_device=$(SwitchAudioSource -t output -c)
        devices=$(SwitchAudioSource -a -t output | grep -o '[^[:cntrl:]]\+')
        IFS=$'\n' read -rd '' -a devicesArr <<< "$devices"
        index=0
        for device in "${devicesArr[@]}"; do
            color=$LABEL_COLOR
            if [[ "$device" != "$current_device" ]]; then
                color=$DISABLED_LABEL_COLOR
            fi
            CLICK_SCRIPT="SwitchAudioSource -s \"$device\""
            sketchybar --add item "volume.device.$index" pupup.volume.bracket \
                --set "volume.device.$index" \
                label="$device" \
                label.color="$color" \
                click_script="$CLICK_SCRIPT"
            ((index++))
        done

        sketchybar --set volume.bracket popup.drawing=on
    else
        sketchybar --set volume.bracket popup.drawing=off
        sketchybar --remove '/volume.device.*/'
    fi
}

set_volume() {
    osascript -e "set volume output volume $PERCENTAGE"
}

case $NAME in
    "volume")
        case "$SENDER" in
            "volume_change")
                volume_change
                ;;
            "mouse.clicked")
                toggle_popup
                ;;
        esac
        ;;
    "volume.bracket")
        case "$SENDER" in
            "mouse.exited.global")
                sketchybar --set volume.bracket popup.drawing=off
                ;;
        esac
        ;;
    "volume.slider")
        set_volume
        ;;
esac
