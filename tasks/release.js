'use strict';

var gulp = require('gulp'),
    header = require('gulp-header'),
    size = require('gulp-size'),
    pkg = global.MODULE_PKG;

gulp.task('release', ['build:js', 'stylus:min'], function gulpBuild() {
    var banner = getBannerText();

    gulp.src('build/*.js')
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist'))
        .pipe(size());

    gulp.src('build/javascript/*.js')
        .pipe(gulp.dest('dist/javascript'))
        .pipe(size());

    gulp.src('build/stylesheets/*.min.css')
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('dist/stylesheets'))
        .pipe(size());

    gulp.src('src/templates/*.html')
        .pipe(gulp.dest('dist/templates'))
        .pipe(size());

    gulp.src([
            'src/images/**/*.png',
            'src/images/**/*.gif',
            'src/images/**/*.jpg',
            'src/images/**/*.jpeg',
            'src/images/**/*.webp',
            'src/images/**/*.svg'
        ])
        .pipe(gulp.dest('dist/images'))
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
