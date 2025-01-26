# Extract the part between "up" and ", x users,"
uptime_info=$(uptime | awk -F "up " '{print $2}' | awk -F ", [0-9]+ users" '{print $1}')

# Initialize variables
days=0
hours=0
minutes=0

# Parse the extracted uptime info
if [[ "$uptime_info" =~ ([0-9]+)\ days ]]; then
    days=${BASH_REMATCH[1]}
    uptime_info=${uptime_info/${BASH_REMATCH[0]}/}
fi

if [[ "$uptime_info" =~ ([0-9]+):([0-9]+) ]]; then
    hours=${BASH_REMATCH[1]}
    minutes=${BASH_REMATCH[2]}
elif [[ "$uptime_info" =~ ([0-9]+)\ hrs ]]; then
    hours=${BASH_REMATCH[1]}
elif [[ "$uptime_info" =~ ([0-9]+)\ mins ]]; then
    minutes=${BASH_REMATCH[1]}
fi

output=""
if [[ $days -gt 0 ]]; then
    output+="${days}d "
fi
if [[ $hours -gt 0 ]]; then
    output+="${hours}h "
fi
if [[ $minutes -gt 0 ]]; then
    output+="${minutes}m"
fi

sketchybar_bottom --set uptime label="$output"
