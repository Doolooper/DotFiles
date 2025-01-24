uptime=$(uptime | awk -F'(up |, 1 user)' '{print $2}' | awk -F'( days,  |:)' '{print $1"d "$2"h "$3"m"}')

sketchybar_bottom --set uptime label="$uptime"
