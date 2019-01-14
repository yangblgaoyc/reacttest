var gulp = require('gulp');
gulp.task('copy',  function() {
    return gulp.src('src/js/**/**/*')
        .pipe(gulp.dest('build/jsssr'));
});