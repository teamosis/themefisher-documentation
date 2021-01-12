#!/bin/bash
hugo mod clean
hugo mod get -u ./...
hugo --gc --minify