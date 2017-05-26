#!/bin/bash

ng build --prod

rm -rf docs

mv dist docs
