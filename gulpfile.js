const fs = require('fs');
const gulp = require('gulp');
const wrap = require('gulp-wrap');
const uglify = require('gulp-uglify');

gulp.task('build_data', () => (
  gulp.src('data.js')
  .pipe(wrap({src: 'res/js/exports.js'}))
  .pipe(uglify())    //uglify
  .pipe(gulp.dest('res/js/dist/'))
));