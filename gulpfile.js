/**
 * Gulp init
 */
var gulp = require('gulp');

/**
 * Gulp awesomeness
 */
var path         = require('path'),
    less         = require('gulp-less'),
    sourcemaps   = require('gulp-sourcemaps'),
    cleanCSS     = require('gulp-clean-css'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    plumber      = require('gulp-plumber');

/**
 * Watcher :
 * Watch all project .less and .js files modification
 * to trigger the appropriate task.
 */
gulp.task('watch', function() {
    gulp.watch('./css/**/*.less', ['less']);
    gulp.watch('./app/**/*.js', ['js']);
});

/**
 * Less task :
 * plumber prevent breacking on errors while watched
 * sourcemaps, parse main.less, autoprefix the output, whrite to dist.
 */
gulp.task('less', function () {
  return gulp.src('./css/main.less')
    .pipe(plumber({
        errorHandler: function (err) {
            console.log(err);
            this.emit('end');
        }
    }))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

/**
 * Js task :
 * Sourcemap and concat angular files into dist.
 */
gulp.task('js', function () {
  return gulp.src([
        './app/_app.js',
        './app/config/*.js',
        './app/router/*.js',
        './app/controller/*.js',
        './app/directive/*.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist'));
});

/**
 * Production task :
 * Minify and rename main css files.
 */
 gulp.task('prod', function() {
  return gulp.src('./dist/main.css')
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
});