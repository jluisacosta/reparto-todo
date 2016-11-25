var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var smoosh = require('gulp-smoosher');

var scssFiles = [ 'grid', 'style', 'rd-mailform', 'google-map', 'mailform', 'contact-form' ];

scssFiles = scssFiles.map(function(el){ return './src/sass/' + el + '.scss'; });

var config = {
  view: {
    src: './src/index.html',
    dest: './'
  },
  styles: {
    src: scssFiles,
    dest: './css'
  }
};

gulp.task('build:html', () => {
  gulp.src(config.view.src)
    .pipe(smoosh())
    .pipe(gulp.dest(config.view.dest));
});

gulp.task('build:css', () => {
  gulp.src(config.styles.src)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'//'compressed' || 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.styles.dest));
});

gulp.task('watch',function () {
  gulp.watch('./src/index.html',['build:html']);
  gulp.watch('./src/sass/**/*.scss',['build:css']);
});

gulp.task('build', ['build:css', 'build:html']);

gulp.task('default', ['watch']);
