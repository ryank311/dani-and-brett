#!/bin/bash
FILES="$@"
for i in $FILES
do
echo "Prcoessing image $i ..."
/usr/bin/convert -thumbnail 400 $i thumb.$i
done
