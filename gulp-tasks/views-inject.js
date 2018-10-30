'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const fs = require('fs');
      const subdirectorView = fs.readFileSync('./build/subdirector.html');

      return gulp.src(['./src/subdirector.js'])
        .pipe(plugins.injectString.replace('SUBDIRECTOR_VIEW_TOKEN', subdirectorView))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
