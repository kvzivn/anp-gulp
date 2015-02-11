'use strict';

var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename');

gulp.task('stylus', function gulpStylus() {
    return gulp
        .src('src/stylesheets/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus({
          use: nib(),
          compress: false
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('stylus:min', function gulpStylusMin() {
    return gulp
        .src('src/stylesheets/*.styl')
        .pipe(stylus({
            use: nib(),
            compress: true
        }))
        .pipe(rename(function rename(path) {
            path.extname = '.min.css';
        }))
        .pipe(gulp.dest('dist/css'));
});
