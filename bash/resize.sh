#!/bin/bash
# resize files downscale 50% when bigger than 800kb - run until happy or from cron
find . -size  0 -print0 | xargs -0 rm
minimumsize=800000
for i in * ; do
	actualsize=$(wc -c < "$i")
	echo "parsing file $i"
	if [ $actualsize -ge $minimumsize ]; then
		convert "$i" -resize 50% "$i"
		echo "ok"
	else
		echo "size is $actualsize = under $minimumsize bytes"
	fi
done

