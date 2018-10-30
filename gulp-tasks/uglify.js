'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return gulp.src([`./**/*.js`, `!./**/*.min.js`])
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.babel({
          presets: [
            ['env', { 'modules': false }]
          ],
          ignore: [
          ]
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.size(config.sizeOptions))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
