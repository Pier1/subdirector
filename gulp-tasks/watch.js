'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      gulp.watch([`${config.srcPath}/**/*.scss`], ['styles']);
      gulp.watch([`${config.srcPath}/**/*.pug`], ['views']);
      gulp.watch([`${config.srcPath}/**/*.js`], ['uglify']);
      gulp.watch(config.buildPath + './*.html')
        .on('change', plugins.browserSync.reload);
      gulp.watch(config.buildPath + '/**/*.js')
        .on('change', plugins.browserSync.reload);

      return true;
    }
  };
})();
