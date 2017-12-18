var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

gulp.task('js', function() {
    var src = [
      'js/FileSaver.js'
      ,'app.js'];

    return gulp.src(src)
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist'))
});

gulp.task('css', function() {
    var src = ['css/app.css'];

    return gulp.src('css/app.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('dist'));
});
