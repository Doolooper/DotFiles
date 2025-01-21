disk_usage=$(diskutil info /dev/disk3s1s1 | grep 'Container Free Space:' | awk '{print $4 $5}')

sketchybar_bottom --set disk label="$disk_usage"
