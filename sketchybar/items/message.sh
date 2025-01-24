sketchybar --add event send_message \
    --add event hide_message \
    --add item message center \
    --set message \
    popup.drawing=off \
    popup.align=center \
    label.padding_left=0 \
    label.padding_right=0 \
    background.padding_left=0 \
    background.padding_right=0 \
    script="$PLUGIN_DIR/message.sh" \
    --subscribe message send_message hide_message \
    --add item message.popup popup.message \
    --set message.popup \
    width=dynamic \
    background.color=$POPUP_COLOR \
    background.border_width=1 \
    background.height=dynamic \
    label.padding_left=10 \
    label.padding_right=10 \
    icon.padding_left=0 \
    icon.padding_right=0
