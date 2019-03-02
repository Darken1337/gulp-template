module.exports = function() {
  $.gulp.task('scripts:dev', () => {
    return $.gulp.src('src/static/js/main.js')
          .pipe($.plag.plumber())
          .pipe($.plag.plumber.stop())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.bs.reload({
            stream: true
          }))
  })

  $.gulp.task('scripts:build', () => {
    return $.gulp.src('src/static/js/main.js')
      .pipe($.plag.plumber())
      .pipe($.plag.plumber.stop())
      .pipe($.plag.uglify())
      .pipe($.gulp.dest('build/static/js'))
      .pipe($.bs.reload({
        stream: true
      }))
  })

  $.gulp.task('scripts-lib', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
      'node_modules/slick-carousel/slick/slick.min.js',
      'node_modules/moveto/dist/moveTo.min.js'])
      .pipe($.plag.concat('libs.min.js'))
      .pipe($.plag.uglify())
      .pipe($.gulp.dest('build/static/libs'))
      .pipe($.bs.reload({
        stream: true
      }))
  })

  // $.gulp.task('modules', () => {
  //   return $.gulp.src(['src/static/libs/modules.js'])
  //       .pipe($.plag.concat('modules.js'))
  //       .pipe($.gulp.dest('build/static/libs'))
  //       .pipe($.bs.reload({
  //         stream: true
  //       }))
  // })
}