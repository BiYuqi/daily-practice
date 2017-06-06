var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
var browserSync = require('browser-sync').create(); // 静态服务器
var reload = browserSync.reload;

gulp.task('pxtorem', function() {
  var processors = [px2rem({remUnit: 75})];
  return gulp.src('./src/css/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('static', function() {
  return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('watch',function(){
     gulp.watch('src/**/*',['pxtorem','js','static']);
});

gulp.task('default',['pxtorem','watch','js','static']);
