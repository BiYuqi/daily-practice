const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const gulpSass = require('gulp-sass')
const concat = require('gulp-concat')

// 编译并压缩js
gulp.task('convertJS', function(){
  return gulp.src('src/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    // .pipe(uglify())
    .pipe(concat('v-model.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('convertCss', function(){
  return gulp.src('src/index.scss')
    .pipe(gulpSass())
    .pipe(concat('v-model.css'))
    .pipe(gulp.dest('./dist'))
})

// 监视文件变化，自动执行任务
gulp.task('watch', function(){
  gulp.watch('src/index.js', ['convertJS']);
  gulp.watch('src/index.scss', ['convertCss']);
})


gulp.task('default', ['convertJS','convertCss','watch']);
