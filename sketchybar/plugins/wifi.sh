source "$CONFIG_DIR/settings/icons.sh"

check_wifi_status() {
    icon=$WIFI_OFF
    ip=$(ipconfig getifaddr en0)
    if [ -z "$ip" ]; then
        ipConnected=false
    else
        ipConnected=true
    fi
    if [ "$ipConnected" = true ]; then
        icon=$WIFI
    fi
    vpn=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')
    if [ -n "$vpn" ]; then
        ICON=$WIFI_VPN
    fi
    sketchybar --set wifi icon=$icon
}

update_info() {
    popup_status=$(sketchybar --query wifi.bracket popup.drawing | jq .popup.drawing)
    popup_status=$(echo "$popup_status" | sed 's/"//g')
    if [[ $popup_status == "off" ]]; then
        hostname=$(networksetup -getcomputername)
        ip=$(ipconfig getifaddr en0)
        ssid=$(ipconfig getsummary en0 | awk -F ' SSID : ' '/ SSID : / {print $2}')
        router=$(networksetup -getinfo Wi-Fi | awk -F 'Router: ' '/^Router: / {print $2}')

        sketchybar --set wifi.ssid label="$ssid" \
            --set wifi.hostname label="$hostname" \
            --set wifi.ip label="$ip" \
            --set wifi.router label="$router" \
            --set wifi.bracket popup.drawing=on
    else
        sketchybar --set wifi.bracket popup.drawing=off
    fi
}

copy_value() {
    label=$(sketchybar --query "$NAME" | jq ".label.value")
    label=$(echo "$label" | sed 's/"//g')
    echo "$label" | pbcopy
}

case $SENDER in
    "mouse.exited.global")
        sketchybar --set wifi.bracket popup.drawing=off
        ;;
    "mouse.clicked")
        case "$NAME" in
            "wifi.ssid" | "wifi.ip" | "wifi.hostname" | "wifi.router")
                copy_value
                ;;
            *)
                update_info
                ;;
        esac
        ;;
    "wifi_change" | "system_woke" | "forced")
        check_wifi_status
        ;;
esac
