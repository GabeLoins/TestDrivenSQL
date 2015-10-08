// gulpfile.js
 
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var chmod = require('gulp-chmod');
 
gulp.task('build', function () {
    console.log('bingo');
    browserify({
          entries: './components/index.jsx',
          extensions: ['.jsx'],
              debug: true
                  })
      .transform(babelify)
          .bundle()
            .pipe(source('bundle.js'))
              .pipe(chmod(755))
                .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch('./components/*.js', ['build']);
});
 
gulp.task('default', ['watch']);
