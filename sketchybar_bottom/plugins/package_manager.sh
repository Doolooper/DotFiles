update() {
    BREW_OUTDATED=$(brew outdated | wc -l | tr -d ' ')
    sketchybar_bottom --set homebrew label=$BREW_OUTDATED
}

case "$SENDER" in
    *)
        update
        ;;
esac
