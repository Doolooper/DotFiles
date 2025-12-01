update() {
    BREW_OUTDATED=$(brew outdated | wc -l | tr -d ' ')
    sketchybar_bottom --set homebrew label=$BREW_OUTDATED
}

tmux_update_first_session() {
    local session_name="update_$$" # unique session name using the PID

    # Create a new detached session running the 'update' command
    tmux new-session -d -s "$session_name" "update; tmux kill-session -t $session_name"
}

case "$SENDER" in
    "mouse.clicked")
        tmux_update_first_session
        ;;
    *)
        update
        ;;
esac
