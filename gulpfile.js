var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');


gulp.task('watch:sass', function () {
	livereload.listen();
	gulp.watch('c:/Users/Jami/Desktop/Web/Cox/Cox/sass/*.scss', ['sass']);
	gulp.watch('c:/Users/Jami/Desktop/Web/Cox/Cox/css').on('change', livereload.changed);
    return gulp;
});

gulp.task('sass', function () {
	 gulp.src('c:/Users/Jami/Desktop/Web/Cox/Cox/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('c:/Users/Jami/Desktop/Web/Cox/Cox/css/'))
    .pipe(notify({
    	message: 'Sass compiled.'
    }));

    gulp.src('c:/Users/Jami/Desktop/Web/Cox/Cox/sass/styles.scss')
    .pipe(livereload());
});

gulp.task('default', ['watch:sass']);