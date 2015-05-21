var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    runSequence = require('run-sequence'),
    swig = require('gulp-swig'),
    uglify = require('gulp-uglify'),
    ghPages = require('gulp-gh-pages');

gulp.task('stylus', function () {
    gulp.src(['./styl/**/*.styl', '!styl/**/_*'])
        .pipe(stylus({
            compress: true,
            use: [nib(), jeet(), rupture()]}))
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});

gulp.task('swig', function() {
    gulp.src('./*.html')
        .pipe(swig())
        .pipe(gulp.dest('./build/'));
});

gulp.task('compressjs', function() {
  return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function () {
    gulp.watch(['./styl/**/*.styl'], ['stylus']);
    gulp.watch(['./**/*.html'], ['swig']);
    gulp.watch(['./js/*.js'], ['compressjs']);
});

gulp.task('copyfiles', function() {
   gulp.src('./fonts/**/*.{ttf,woff,eof,svg}')
   .pipe(gulp.dest('./build/fonts'));

   gulp.src('./resources/*')
   .pipe(gulp.dest('./build/resources'));

   gulp.src('./favicon.ico')
   .pipe(gulp.dest('./build'));

   gulp.src('./CNAME')
   .pipe(gulp.dest('./build'));

   gulp.src('./img/**/*')
   .pipe(gulp.dest('./build/img'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'build',
        livereload: true
    });
});

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

gulp.task('default', [
    'stylus',
    'connect',
    'watch',
    'copyfiles'
]);