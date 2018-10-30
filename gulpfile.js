'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });
const tasksPath = './gulp-tasks';

const config = {
  sizeOptions: {
    showFiles: true,
    gzip: true
  },
  buildPath: './build'
};

function getTask(task, taskParams) {
  return require(`${tasksPath}/${task}`)(gulp, plugins, config, taskParams);
}

gulp.task('build', ['styles', 'views', 'views-inject', 'bookmarkleter']);
gulp.task('styles', getTask('styles'));
gulp.task('transpile', getTask('transpile'));
gulp.task('views', getTask('views'));
gulp.task('views-inject', getTask('views-inject'));
gulp.task('watch', getTask('watch'));
