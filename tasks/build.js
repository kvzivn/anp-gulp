'use strict';

var gulp = require('gulp');

gulp.task('build', ['build:jsmin', 'stylus:min'], function gulpBuild() {});
gulp.task('build:pretty', ['build:js', 'stylus'], function gulpBuild() {});
