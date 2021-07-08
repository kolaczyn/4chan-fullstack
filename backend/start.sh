#bin/sh

yarn install
yarn build
# TypeScript doesn't compiler images, obviously, so I have to move them to `dist/` folder in otherway
# This is a quick and dirty solution, so I don't have to set up a webpack config or something
cp ./src/public ./dist
yarn start
