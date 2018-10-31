'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');

      const bookmarklet = fs.readFileSync(`${config.buildPath}/subdirector.bookmarklet.js`);

      return gulp.src([`${config.srcPath}/demo.pug`])
        .pipe(plugins.pug({
          pretty: true,
          locals: {
            bookmarklet: bookmarklet
          }
        }))
        .pipe(plugins.styleInject({
          path: `${config.buildPath}/`
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
