'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      var fs = require('fs');

      const bookmarklet = fs.readFileSync(`${config.buildPath}/subdirector.bookmarklet.js`);

      return gulp.src([`${config.srcPath}/demo/index.pug`])
        .pipe(plugins.pug({
          pretty: true,
          locals: {
            bookmarklet: bookmarklet
          }
        }))
        .pipe(plugins.styleInject({
          path: `${config.buildPath}/demo/`
        }))
        .pipe(gulp.dest(`${config.buildPath}/demo`))
        .pipe(gulp.dest('./demo'))
      ;
    }
  };
})();
