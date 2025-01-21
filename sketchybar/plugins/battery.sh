source "$CONFIG_DIR/settings/icons.sh"

PERCENTAGE=$(pmset -g batt | /usr/bin/grep -Eo "\d+%" | cut -d% -f1)
CHARGING=$(pmset -g batt | /usr/bin/grep 'AC Power')

if [ $PERCENTAGE = "" ]; then
    exit 0
fi

case ${PERCENTAGE} in
    [8-9][0-9] | 100)
        ICON=$BATTERY_FULL
        ;;
    7[0-9])
        ICON=$BATTERY_3
        ;;
    [4-6][0-9])
        ICON=$BATTERY_2
        ;;
    [1-3][0-9])
        ICON=$BATTERY_1
        ;;
    [0-9])
        ICON=$BATTERY_0
        ;;
esac

if [[ $CHARGING != "" ]]; then
    ICON=$BATTERY_CHARGING
fi

sketchybar --set battery \
    icon=$ICON \
    label="${PERCENTAGE}%"
