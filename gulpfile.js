var gulp = require('gulp'),	
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');
 
gulp.task('concat-src',function(){
	gulp.src(['./js/app/*.js',  './js/app/**/*.js'])
		.pipe(concat('flexicard.js'))
		.pipe(gulp.dest('./deploy/scripts'))
		.pipe(concat('flexicard.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./deploy/scripts'));
});

gulp.task('concat-lib', function(){
	gulp.src(['./js/lib/*.js','./js/lib/**/*.js'])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./deploy/lib'))
});

gulp.task('watch', function(){
	gulp.watch('./js/app/*.js', ['concat-src','concat-lib']);
});

gulp.task('default', ['watch', 'concat-src', 'concat-lib']);