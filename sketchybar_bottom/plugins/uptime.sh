uptime=$(uptime | sed -E 's/^[^,]*up *//; s/mins?/m/; s/hrs?/h/; s/([[:digit:]]+):0?([[:digit:]]+)/\1h \2m/; s/^1h/0d 1h/; s/^([[:digit:]]+) days?, ([[:digit:]]+)h/\1d \2h/; s/, *[[:digit:]]* users?.*//')

sketchybar_bottom --set uptime label="$uptime"
