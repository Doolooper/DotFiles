sketchybar --add item volume right \
    --set volume \
    label="00" \
    popup.drawing=off \
    popup.align=center \
    icon=$VOLUME_0 \
    background.color=$VOLUME_COLOR \
    background.border_color=$VOLUME_COLOR \
    script="$PLUGIN_DIR/volume.sh" \
    --subscribe volume volume_change mouse.clicked mouse.exited.global \
    --add bracket volume.bracket volume \
    --set volume.bracket \
    popup.align=center \
    popup.background.color=$POPUP_COLOR \
    popup.background.border_color=$BORDER_COLOR \
    background.border_width=1 \
    background.height=dynamic \
    script="$PLUGIN_DIR/volume.sh" \
    --subscribe volume.bracket mouse.exited.global \
    --add slider volume.slider pupup.volume.bracket 120 \
    --set volume.slider \
    align=center \
    background.color=$POPUP_COLOR \
    slider.highlight_color=$LIGHT_GREY \
    slider.background.border_color=$DARK_GREY \
    slider.background.color=$DARK_GREY \
    slider.background.border_width=0 \
    slider.background.height=4 \
    slider.knob.drawing=on \
    slider.knob.font="$FONT:Regular:22" \
    slider.knob.color=$GREY \
    slider.knob="" \
    script="$PLUGIN_DIR/volume.sh" \
    --subscribe volume.slider mouse.clicked mouse.exited.global
