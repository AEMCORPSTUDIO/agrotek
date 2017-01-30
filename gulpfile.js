/*
    Gulp Box
*/

'use strict';

var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var chalk = require('chalk');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var merge = require('utils-merge');
var duration = require('gulp-duration');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sftp = require('gulp-sftp');
var notify = require('gulp-notify');

var runSequence = require('run-sequence').use(gulp);

// var secrets = require('./secrets.json');

var config = {
  src: './',
  dist: './production',
  js: {
    src: [
      './js/index.jsx',
    ],
    watch: './js/**/*',
    outputDir: './production',
    outputFile: 'turbo.js',
    libs: require('./config.libs.js')
  },
  less: {
    src: './styles/styles.less',
    watch: './styles/**/*',
    outputDir: './production'
  },
  html: {
    src: './*.html',
    outputDir: './production'
  },
  fonts: {
    src: './fonts/**/*',
    outputDir: './production/fonts'
  },
  images: {
    src: './production/images/**/*',
    outputDir: './production/images'
  }
};

function mapError(err) {
  if (err.fileName) {

    gutil.log(chalk.red(err.name)
      + ': ' + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
      + ': ' + 'Line ' + chalk.magenta(err.lineNumber)
      + ' & ' + 'Column ' + chalk.magenta(err.columnNumber || err.column)
      + ': ' + chalk.blue(err.description));
  } else {
    // browserify error..
    gutil.log(chalk.red(err.name)
      + ': '
      + chalk.yellow(err.message));
  }
}

function bundle(bundler, callback) {
  var bundleTimer = duration('Javascript bundle time');

  runSequence('libs');

  bundler
    .bundle()
    .on('error', mapError)
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(rename(config.js.outputFile))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.js.outputDir))
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>',
    }))
    .pipe(bundleTimer)

  //  .pipe(notify('Scripts done'))
  //  .pipe(livereload());
}
gulp.task('everything', function(){
    return gulp.src([config.dist+'/build/libs.js', config.dist+'/build/es6.js'])
        .pipe(concat('everything.js'))
        .pipe(gulp.dest(config.dist+'/build'))
        .pipe(uglify().on('error', gutil.log))
        .pipe(rename('everything.min.js'))
        .pipe(gulp.dest(config.dist+'/build'))
        .pipe(notify('EVERYTHING merged'));
});

gulp.task('hold', function() {
  return gulp.src(config.html.outputDir+'/placeholder.html')
    .pipe(rename('index.html'))
    .pipe(sftp({
        host: secrets.host,
        user: secrets.user,
        pass: secrets.pass,
        remotePath: secrets.path
      }));
});

gulp.task('libs', function() {
    return gulp.src(config.js.libs)
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(config.js.outputDir))
    //    .pipe(notify('Libs merged'));
});

gulp.task('styles', function() {
    return gulp.src([config.less.src])
     //   .pipe(plumber())
        .pipe(less())
        .on('error', mapError)
        .pipe(autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'IE 8',
                'IE 9',
                'IE 10',
                'IE 11'
            ],
            cascade: false
        }))
        .pipe(gulp.dest(config.less.outputDir)).on('error', gutil.log)
        .pipe(notify('Styles compiled'));
});

gulp.task('html', function() {
    var htmlmin = require('gulp-htmlmin');
    return gulp.src([config.html.src])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.html.outputDir))
        .pipe(notify('HTML minifed & copied'))
});

gulp.task('watch', function() {
    gulp.watch(config.less.watch, { interval: 800 }, ['styles']);
    gulp.watch(config.html.src, { interval: 800 }, ['html']);
});

gulp.task('default', ['styles', 'libs', 'html', 'watch'], function() {
 // livereload.listen();
  var args = merge(watchify.args, { debug: true });

  var bundler = browserify(config.js.src, args)
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**', '**/bower_components/**']})
    .transform(babelify, {presets: ['es2015', 'react']});

  bundle(bundler, function(){
    console.log('govno');
  });

  bundler.on('update', function() {
    bundle(bundler);
  });
});

var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});
