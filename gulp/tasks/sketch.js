var gulp   = require('gulp'),
	config = require('../config'),
	sketch = require('gulp-sketch');

gulp.task('sketch', function() {
  return gulp.src(config.sketch.src)
    .pipe(sketch(config.sketch.options))
    .pipe(gulp.dest(config.sketch.dest));
});