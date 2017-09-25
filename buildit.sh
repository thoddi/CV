#!/bin/bash

ng build --prod  --bh https://thoddi.github.io/cv/

rm -rf docs

mv dist docs
