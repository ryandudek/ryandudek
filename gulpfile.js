var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    swig = require('gulp-swig');

gulp.task('stylus', function () {
    gulp.src(['./source/styl/**/*.styl', '!styl/**/_*'])
        .pipe(stylus({
            compress: true,
            use: [nib(), jeet(), rupture()]}))
        .pipe(gulp.dest('./css'))
        .pipe(connect.reload());
});

gulp.task('swig', function() {
    gulp.src('./source/*.html')
        .pipe(swig())
        .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    gulp.src('./source/js/*.js')
        .pipe(connect.reload())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch(['./source/styl/**/*.styl'], ['stylus']);
    gulp.watch(['./source/**/*.html'], ['swig']);
    gulp.watch(['./source/js/*.js'], ['js']);
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