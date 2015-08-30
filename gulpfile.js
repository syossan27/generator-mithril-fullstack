var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('test', function() {
  return gulp.src('test/*.js')
      .pipe(mocha({reporter: 'list'}))
      .on('error', gutil.log)
});

gulp.task('watch-test', function() {
  gulp.watch(['client/**', 'server/**', 'test/**'], ['test']);
});
