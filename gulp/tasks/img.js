module.exports = function() {
  $.gulp.task('img:build', () => {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif,svg}')
      .pipe($.plag.tinypng('pdFGGhdMtTtmZK8sYPTrX1mVvbTD2tPY'))
      .pipe($.gulp.dest('build/img'));
  });

  $.gulp.task('img:dev', () => {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif,svg}')
      .pipe($.gulp.dest('build/img'));
  });
}