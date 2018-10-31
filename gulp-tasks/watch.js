'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    const browserSync = require('browser-sync').create();
    return () => {
      browserSync.init({
        server: {
            baseDir: `./demo/`
        }
      });

      gulp.watch([`${config.srcPath}/*.scss`, `!${config.srcPath}/demo.scss`], ['build']);
      gulp.watch([`${config.srcPath}/*.pug`, `!${config.srcPath}/demo.pug`], ['build']);
      gulp.watch([`${config.srcPath}/*.js`], ['build']);
      gulp.watch([`${config.srcPath}/demo/**/*`], ['demo']).on('change', browserSync.reload);

      return true;
    }
  };
})();
