'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return gulp.src([`./build/**/*.js`, `!./**/*.es5.js`])
        .pipe(plugins.rename({ suffix: '.es5' }))
        .pipe(plugins.babel({
          presets: ['@babel/env']
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
