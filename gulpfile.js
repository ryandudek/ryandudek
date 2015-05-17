var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence');

gulp.task('stylus', function () {
    gulp.src(['./styl/**/*.styl', '!styl/**/_*'])
        .pipe(stylus({
            compress: true,
            use: [nib(), jeet(), rupture()]}))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('**/*.html')
      .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./js/*.js')
      .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./styl/**/*.styl'], ['stylus']);
    gulp.watch(['./**/*.html'], ['html']);
    gulp.watch(['./js/*.js'], ['js']);
});

gulp.task('connect', function() {
    connect.server({
        root: [__dirname],
        livereload: true
    });
});

gulp.task('default', [
    'stylus',
    'connect',
    'watch'
]);