'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });
const tasksPath = './gulp-tasks';

const config = {
  sizeOptions: {
    showFiles: true,
    gzip: true
  },
  buildPath: '.'
};

function getTask(task, taskParams) {
  return require(`${tasksPath}/${task}`)(gulp, plugins, config, taskParams);
}

gulp.task('build', ['styles', 'views', 'uglify']);
gulp.task('styles', getTask('styles'));
gulp.task('uglify', getTask('uglify'));
gulp.task('views', getTask('views'));
gulp.task('watch', getTask('watch'));
