'use strict';

var gulp = require('gulp');

gulp.task('watch', ['clean', 'stylus', 'lint:all', ], function() {
    gulp.watch('src/stylesheets/**/*.scss', ['stylus']);
    gulp.watch('src/javascript/*.js', ['lint:all']);
});