#!/bin/bash

rm -rf tmp
mkdir tmp

cp homepage.html tmp
cp server.js tmp
cp package.json tmp
cp package-lock.json tmp

cd tmp
zip ../prod.zip -r ./
cd ..
rm -rf tmp