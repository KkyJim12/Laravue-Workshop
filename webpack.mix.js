const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(
    [
        "public/assets/js/jquery-3.4.1.min.js",
        "public/assets/js/bootstrap.min.js",
        "resources/js/app.js"
    ],
    "public/js/all.js"
).styles(["public/assets/css/bootstrap.min.css"], "public/css/all.css");
