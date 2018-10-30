'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');

      return gulp.src(['./**/*.pug', '!./**/_*.pug', '!node_modules/**/*'])
        .pipe(plugins.pug({
          basedir: __dirname + '/../' + config.templatesPath,
          pretty: true,
          locals: {
          }
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
