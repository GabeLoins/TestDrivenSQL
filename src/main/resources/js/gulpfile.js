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
            .on('error', onError)
              .pipe(source('bundle.js'))
                .pipe(gulp.dest('dist'));
});

function onError(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('watch', ['build'], function () {
  gulp.watch(['./components/*.js', './actions/*.js', './stores/*.js', './constants/*.js'], ['build']);
});
 
gulp.task('default', ['watch']);
