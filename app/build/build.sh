r.js -o app/build/app.build.js
cd dist
rm -rf build build.txt
cd styles
rm -rf imports sass
cd ../scripts
rm -rf bounties.js libs
mv vendor/require.js .
mv vendor/modernizr-dev.js .
rm vendor/*
mv require.js vendor/
mv modernizr-dev.js vendor/
