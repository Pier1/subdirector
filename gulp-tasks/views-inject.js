'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const fs = require('fs');
      const subdirectorView = fs.readFileSync(`${config.buildPath}/subdirector.html`);

      return gulp.src([`${config.srcPath}/subdirector.js`])
        .pipe(plugins.injectString.replace('// SUBDIRECTOR_VIEW_TOKEN', `$('body').append(\`${subdirectorView.toString()}\`);`))
        .pipe(gulp.dest(config.buildPath))
      ;
    }
  };
})();
