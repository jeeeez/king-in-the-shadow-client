#!/bin/bash

message=$(git log --pretty=format:'%s' -n 1)

echo -e "\033[32m $message \033[0m"

cd dist
git add -A
git commit -m "`echo $message`"
git push
