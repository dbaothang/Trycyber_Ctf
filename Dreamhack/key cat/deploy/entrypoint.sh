#!/bin/sh

export FLAG_CONTENT_1=$(cat /home/cat/deploy/flag.txt | cut -c 1-34)
export FLAG_CONTENT_2=$(cat /home/cat/deploy/flag.txt | cut -c 35-68)

FLAG=$(cat /dev/urandom | tr -dc 'a-f0-9' | fold -w 2 | head -n 1)

mv /home/cat/deploy/flag.txt /home/cat/deploy/flag$FLAG.txt

export FLAG_FILE_NAME=flag$FLAG.txt

exec "$@"