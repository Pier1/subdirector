'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');

      return gulp.src(['./src/*.pug', '!./src/_*.pug', '!node_modules/**/*'])
        .pipe(plugins.pug({
          pretty: true,
          locals: {
          }
        }))
        .pipe(plugins.styleInject({
          path: './build/'
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
