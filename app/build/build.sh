r.js -o app/build/app.build.js
cd dist
find . -name '*.DS_Store' -type f -delete
rm -rf build build.txt
cd styles
rm -rf imports sass
cd ../scripts
rm -rf bounties.js libs
mv vendor/require.js .
rm vendor/*
mv require.js vendor/
