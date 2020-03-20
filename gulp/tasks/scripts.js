module.exports = function() {
  $.gulp.task('scripts:dev', () => {
    return $.gulp.src('src/static/js/main.js')
          .pipe($.plag.plumber())
          .pipe($.plag.plumber.stop())
          .pipe($.plag.concat('main.js'))
          .pipe($.gulp.dest('build/js'))
          .pipe($.bs.reload({
            stream: true
          }))
  })


  $.gulp.task('scripts:build', () => {
      return $.gulp.src('src/static/js/*.js')
      .pipe($.plag.plumber())
      .pipe($.plag.plumber.stop())
      .pipe($.uglifyEs())
      .pipe($.plag.rename({
        extname: '.min.js'
      }))
      .pipe($.gulp.dest('build/js'))
      .pipe($.bs.reload({
        stream: true
      }))
  })

  $.gulp.task('scripts-lib', () => {
    return $.gulp.src(['src/static/libs/*.js', './node_modules/svg4everybody/dist/svg4everybody.min.js'])
      .pipe($.gulp.dest('build/libs/js'))
      .pipe($.bs.reload({
        stream: true
      }))
  })

}