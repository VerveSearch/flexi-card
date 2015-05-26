var gulp = require('gulp'),	
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');
 
gulp.task('concat-src',function(){
	gulp.src(['./js/app/*.js',  './js/app/**/*.js'])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./deploy/scripts'))
		.pipe(uglify())
		.pipe(rename({
			extname:'.min.js'
		}))
		.pipe(gulp.dest('./scripts'));
});

gulp.task('concat-lib', function(){
	gulp.src(['./js/lib/*.js','./js/lib/**/*.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./deploy/lib'))
});

gulp.task('watch', function(){
	gulp.watch('./js/**/*.js', ['concat-src','concat-lib']);
});

gulp.task('default', ['watch', 'concat-src', 'concat-lib']);