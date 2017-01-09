var gulp = require('gulp');
var polybuild = require('polybuild');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');


gulp.task('build', function() {
/*
  return gulp.src('./dev/index.html')
	  .pipe(polybuild({maximumCrush: false, suffix: ''}))
	  .pipe(gulp.dest('.'));
*/
	  
	return gulp.src('./dev/index.html')
    .pipe(vulcanize({
        abspath: '',
        excludes: [],
        stripExcludes: true,
        inlineScripts: true
    }))
    .pipe(crisper({
        scriptInHead: false, // true is default 
        onlySplit: false
    }))
    .pipe(gulp.dest('.'));	  
	  
});

gulp.task("watch",function(){
	gulp.watch('./dev/*.html', ['build']);
});

gulp.task("default",["build","watch"]);
