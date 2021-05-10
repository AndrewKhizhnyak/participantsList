#!/usr/bin/env sh

# abort on errors
set -e

yarn build

cd dist

git init
git add -A
git commit -m 'deploy'


git push -f git@github.com:andrewkhizhnyak/participantsList.git main:gh-pages

cd -
