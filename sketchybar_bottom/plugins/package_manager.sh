update() {
    BREW_OUTDATED=$(brew outdated | wc -l | tr -d ' ')
    sketchybar_bottom --set homebrew label=$BREW_OUTDATED
}

tmux_update_first_session() {
    local session=$(tmux list-sessions -F '#S' 2> /dev/null | head -n 1)

    if [[ -z "$session" ]]; then

        return 1

    fi

    tmux send-keys -t "${session}:1" 'update' C-m
}

case "$SENDER" in
    "mouse.clicked")
        tmux_update_first_session
        ;;
    *)
        update
        ;;
esac
