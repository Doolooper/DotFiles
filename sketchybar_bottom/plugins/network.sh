source "$CONFIG_DIR/settings/icons.sh"

CONNECT_STATUS="$(ipconfig getsummary en0 | awk -F ' SSID : '  '/ SSID : / {print $2}')"
UPDOWN="$(ifstat -i "en0" 0.1 1 | tail -n 1)"
DOWN_SPEED=$(($(echo "$UPDOWN" | awk "{ print \$1 }" | cut -f 1 -d ".")))
UP_SPEED=$(($(echo "$UPDOWN" | awk "{ print \$2 }" | cut -f 1 -d ".")))

if [ -z "$CONNECT_STATUS" ]; then
    sketchybar_bottom -m --set $NAME icon.drawing=on icon=$NO_NETWORK
else
    if [ $UP_SPEED -gt 999 ]; then
        UP_SPEED=$(echo $UP_SPEED | awk '{ printf ($1 / 1024 < 10 ? "0%.1f mbs" : "%.1f mbs"), $1 / 1024 }')
    else
        UP_SPEED=$(echo $UP_SPEED | awk '{ printf ($1 < 10 ? "0%.1f kbs" : "%.1f kbs"), $1}')
    fi
    if [ $DOWN_SPEED -gt 999 ]; then
        DOWN_SPEED=$(echo $DOWN_SPEED | awk '{ printf ($1 / 1024 < 10 ? "0%.1f mbs" : "%.1f mbs"), $1 / 1024 }')
    else
        DOWN_SPEED=$(echo $DOWN_SPEED | awk '{ printf ($1 < 10 ? "0%.1f kbs" : "%.1f kbs"), $1}')
    fi
    sketchybar_bottom --set network_up label="$UP_SPEED" \
        --set network_down label="$DOWN_SPEED"
fi
