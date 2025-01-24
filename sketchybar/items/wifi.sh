sketchybar --add item wifi right \
    --set wifi \
    label.drawing=off \
    icon=$WIFI_LOADING \
    background.color=$WIFI_COLOR \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi wifi_change system_woke mouse.clicked \
    --add bracket wifi.bracket wifi \
    --set wifi.bracket \
    popup.align=center \
    popup.background.color=$POPUP_COLOR \
    popup.background.border_color=$BORDER_COLOR \
    background.border_width=1 \
    background.height=dynamic \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi.bracket mouse.exited.global \
    --add item wifi.ssid popup.wifi.bracket \
    --set wifi.ssid \
    align=center \
    icon=$ROUTER \
    icon.width=80 \
    icon.align=left \
    label="????????????" \
    label.align=right \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi.ssid mouse.clicked \
    --add item wifi.hostname popup.wifi.bracket \
    --set wifi.hostname \
    icon="Hostname:" \
    icon.align=left \
    icon.width=80 \
    label="????????????" \
    label.align=right \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi.hostname mouse.clicked \
    --add item wifi.ip popup.wifi.bracket \
    --set wifi.ip \
    icon="IP:" \
    icon.align=left \
    icon.width=80 \
    label="???.???.???.???" \
    label.align=right \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi.ip mouse.clicked \
    --add item wifi.router popup.wifi.bracket \
    --set wifi.router \
    icon="Router:" \
    icon.align=left \
    icon.width=80 \
    label="???.???.???.???" \
    label.align=right \
    script="$PLUGIN_DIR/wifi.sh" \
    --subscribe wifi.router mouse.clicked
