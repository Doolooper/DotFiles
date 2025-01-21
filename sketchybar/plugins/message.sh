show_message() {
    sketchybar --set message \
        popup.drawing=on \
        --set message.popup \
        label="$MESSAGE"
}

hide_message() {
    sketchybar --set message \
        popup.drawing=off
}

case $SENDER in
    "send_message")
        show_message
        ;;
    "hide_message")
        hide_message
        ;;
esac
