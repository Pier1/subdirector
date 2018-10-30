'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      const supported =
        ['last 3 versions'];

      return gulp.src([
          `./src/**/*.scss`,
          '!node_modules/**/*'
        ])
        .pipe(plugins.sass())
        .pipe(plugins.postcss([
          plugins.cssnano(
            {
              autoprefixer: { browsers: supported },
              normalizeUrl: {
                stripWWW: false
              }
            }
          )
        ]))
        .pipe(plugins.autoprefixer({
          browsers: supported
        }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
