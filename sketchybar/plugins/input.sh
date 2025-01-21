SOURCE=$(defaults read ~/Library/Preferences/com.apple.HIToolbox.plist AppleCurrentKeyboardLayoutInputSourceID)

case ${SOURCE} in
    'com.apple.keylayout.Canadian') LABEL='EN' ;;
    'com.apple.keylayout.Persian'*) LABEL='FA' ;;
esac

sketchybar --set $NAME label="$LABEL"
