#!/bin/bash

hugo mod get -u ./...
hugo mod tidy
hugo mod clean
hugo --gc --minify
