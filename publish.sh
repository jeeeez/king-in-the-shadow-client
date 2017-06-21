#!/bin/bash

message=$(git log --pretty=format:'%s' -n 1)

cd dist
git add -A
git commit -m $message
git push
