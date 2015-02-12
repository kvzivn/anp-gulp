'use strict';

var gulp = require('gulp'),
    header = require('gulp-header'),
    pkg = require('../../../package.json'),
    size = require('gulp-size');


gulp.task('release', ['build:jsmin', 'stylus:min'], function gulpBuild() {
    var banner = getBannerText();

    gulp.src('build/javascript/*.min.js')
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/javascript'))
        .pipe(size());

    gulp.src('build/stylesheets/*.min.css')
        .pipe(gulp.dest('dist/stylesheets')
        .pipe(header(banner, { pkg: pkg })))
        .pipe(size());
});

function getBannerText() {
    return [
        '/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @version v<%= pkg.version %>',
        ' * @author  <%= pkg.author %>',
        ' */',
        ''
    ].join('\n');
}
