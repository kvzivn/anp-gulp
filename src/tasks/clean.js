'use strict';

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', ['clean:build']);

gulp.task('clean:build', function(cb) {
    del([
        'dist/build/**',
    ], cb);
});
