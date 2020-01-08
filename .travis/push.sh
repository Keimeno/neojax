#!/bin/sh

setup_git() {
  rev=$(git rev-parse --short HEAD)
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  npm run build
  git add *
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-neojax https://${GH_TOKEN}@github.com/Keimeno/neojax.git
  git push origin-neojax HEAD:develop
}

setup_git
commit_website_files
upload_files