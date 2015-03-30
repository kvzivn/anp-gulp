'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('bs', ['watch'], function() {
    browserSync({
        server: {
            baseDir: './'
        },
        startPath: 'demo/',
        files: [
            'demo/*.html',
            'demo/*.js',
            'src/javascript/*.js',
            'src/images/**/*',
            'src/templates/*.html',
            'build/stylesheets/*.css'
        ],
        browser: ['google chrome canary']
    });
});