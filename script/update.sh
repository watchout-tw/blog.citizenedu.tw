#!/bin/sh

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd ${DIR}
rm -f ../src/posts/* ../src/authors/*
babel-node update-posts.es6 $*
babel-node update-authors.es6 $*
