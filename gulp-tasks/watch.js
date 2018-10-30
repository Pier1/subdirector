'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      gulp.watch(['./src/**/*.scss'], ['styles']);
      gulp.watch(['./src/**/*.pug'], ['views']);
      gulp.watch(['./src/**/*.js'], ['uglify']);
      gulp.watch(config.buildPath + './*.html')
        .on('change', plugins.browserSync.reload);
      gulp.watch(config.buildPath + '/**/*.js')
        .on('change', plugins.browserSync.reload);

      return true;
    }
  };
})();
