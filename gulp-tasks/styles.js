'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const supported =
        ['last 3 versions'];

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
