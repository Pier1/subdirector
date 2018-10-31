'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    const fs = require('fs');

    return () => {
      const bookmarkleter = require('bookmarkleter');

      return gulp.src([`${config.buildPath}/subdirector.es5.js`])
        .pipe(plugins.add('subdirector.bookmarklet.js', bookmarkleter(
          fs.readFileSync(`${config.buildPath}/subdirector.es5.js`), {
            anonymize: true,
            mangleVars: true,
            jQuery: true
          }
        )))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
