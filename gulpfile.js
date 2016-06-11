const fs = require('fs');
const gulp = require('gulp');
const wrap = require('gulp-wrap');
const header = require('gulp-header');
const pkg = require('./package.json');
const uglify = require('gulp-uglify');
const banner = `\
/**
 * <%= pkg.title %> - <%= pkg.description %>
 * @version v<%= pkg.version %>
 * @license <%= pkg.license %>
 * @author <%= pkg.author %>
 *
 * Copyright (c) 2016 hustcc
 * URL: http://www.iReact.cn/
 */
`;

gulp.task('build_data', () => (
  gulp.src('data.js')
  .pipe(wrap({src: 'res/js/exports.js'}))
  .pipe(header(banner, {pkg: pkg}))
  .pipe(uglify())    //uglify
  .pipe(gulp.dest('res/js/dist/'))
));