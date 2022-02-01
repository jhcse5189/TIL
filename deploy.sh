#!/usr/bin sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'shell script deploy'

git push -f git@github.com:jhcse5189/TIL.git master:gh-pages

cd -

