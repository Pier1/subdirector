'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const supported =
        ['Chrome >= 49',
         'Firefox >= 48',
         'Safari >= 10',
         'Edge >= 15',
         'iOS >= 9',
         'Android >= 4.4'];

      return gulp.src([
          `./**/*.scss`,
          '!node_modules/**/*'
        ])
        .pipe(plugins.sass())
        .pipe(plugins.autoprefixer({
          browsers: supported
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
