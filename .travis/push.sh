#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout develop
  git add dist
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-neojax https://${GH_TOKEN}@github.com/Keimeno/neojax.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-neojax develop
}

setup_git
commit_website_files
upload_files