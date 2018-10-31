'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');

      return gulp.src([`${config.srcPath}/*.pug`, `!${config.srcPath}/_*.pug`, '!node_modules/**/*'])
        .pipe(plugins.pug({
          pretty: true
        }))
        .pipe(plugins.styleInject({
          path: `${config.buildPath}/`
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
