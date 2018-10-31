'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return gulp.src([
          `${config.buildPath}/*.js`,
          `!${config.buildPath}*.es5.js`,
          `!${config.buildPath}/*.bookmarklet.js`
        ])
        .pipe(gulp.dest(config.buildPath))
        .pipe(plugins.rename({ suffix: '.es5' }))
        .pipe(plugins.babel({
          presets: ['env']
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
