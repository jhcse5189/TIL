#!/usr/bin sh

# abort on errors
set -e

# clear node 17 openssl issue
export NODE_OPTIONS=--openssl-legacy-provider

# build
yarn docs:build

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'shell script deploy'

git push -f https://github.com/jhcse5189/TIL.git master:gh-pages

cd -

