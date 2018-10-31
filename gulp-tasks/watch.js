'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      gulp.watch([`${config.srcPath}/*.scss`, `!${config.srcPath}/demo.scss`], ['build']);
      gulp.watch([`${config.srcPath}/*.pug`, `!${config.srcPath}/demo.pug`], ['build']);
      gulp.watch([`${config.srcPath}/*.js`], ['build']);
      gulp.watch(`${config.buildPath}/build/demo.html`)
        .on('change', plugins.browserSync.reload);

      return true;
    }
  };
})();
