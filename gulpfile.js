'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });
const tasksPath = './gulp-tasks';

const config = {
  sizeOptions: {
    showFiles: true,
    gzip: true
  },
  buildPath: './build',
  srcPath: './src'
};

function getTask(task, taskParams) {
  return require(`${tasksPath}/${task}`)(gulp, plugins, config, taskParams);
}

var runSequence = require('run-sequence');

gulp.task('bookmarkleter', getTask('bookmarkleter'));
gulp.task('demo', getTask('demo'));
gulp.task('styles', getTask('styles'));
gulp.task('transpile', ['views-inject'], getTask('transpile'));
gulp.task('views', getTask('views'));
gulp.task('views-inject', getTask('views-inject'));
gulp.task('watch', ['build'], getTask('watch'));
gulp.task('build', (done) => { runSequence('styles', 'views', 'transpile', 'bookmarkleter', 'demo', done) });

gulp.task('default', getTask('watch'));
