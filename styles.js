'use strict';

var autoprefixer = require('gulp-autoprefixer'),
    nib = require('nib'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    stylus = require('gulp-stylus'),
    gulp = require('gulp');



/**
 * Compile stylus source to CSS
 */
gulp.task('stylus', function gulpStylus() {
    return gulp
        .src('src/stylesheets/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
          use: nib(),
          compress: false
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/stylesheets'));
});



/**
 * Compile stylus source to minified CSS
 */
gulp.task('stylus:min', function gulpStylusMin() {
    return gulp
        .src('src/stylesheets/*.styl')
        .pipe(stylus({
            use: nib(),
            compress: true
        }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename(function rename(path) {
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('dist/stylesheets'));
});
