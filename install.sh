#!/usr/bin/env bash

# -*- ENCODING: UTF-8 -*-

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg
sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main"
sudo tee /etc/apt/sources.list.d/yarn.list

# -*- installation yarn -*-
sudo apt-get update -y && sudo apt-get install yarn
yarn --version
