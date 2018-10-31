'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return gulp.src([`${config.buildPath}/**/*.js`, `!./**/*.es5.js`])
        .pipe(plugins.rename({ suffix: '.es5' }))
        .pipe(plugins.babel({
          presets: ['@babel/env']
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
