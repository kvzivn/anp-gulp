'use strict';

var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin');

gulp.task('svgstore', function svg() {
    return gulp
        .src('src/images/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest('build/images'));
});
