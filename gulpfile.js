var gulp       = require('gulp'),
  uglify     = require('gulp-uglify'),
  sass       = require('gulp-sass'),
  imagemin   = require('gulp-imagemin');

// ******************************************
// SCRIPT
// ******************************************
gulp.task('scripts', function(){
  gulp.src(['dev/js/*.js'])
    .pipe(uglify({
      outSourceMap: false
    }))
    //.pipe(browserify({
    //  debug: true,
    //  transform: [ 'reactify' ]
    //}))
    .pipe(gulp.dest('./public/js'));
});


// ******************************************
// CSS
// ******************************************
gulp.task('sass', function(){
  gulp.src('dev/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/css'));
});


// ******************************************
// IMAGES
// ******************************************
gulp.task('images', function() {
  return gulp.src('dev/images/*')
    .pipe((imagemin({ optimizationLevel: 7, progressive: true, interlaced: true })))
    .pipe(gulp.dest('./public/images'));
});


// ******************************************
// WATCH
// ******************************************
gulp.task('watch', function(){
  gulp.watch('dev/**/*.js', ['scripts']);
  gulp.watch('dev/scss/**/*.scss', ['sass']);
  gulp.watch('src/images/**/*', ['images']);
});


// ******************************************
// DEFAULT [ALL]
// ******************************************
gulp.task('default', ['scripts', 'sass', 'images', 'watch']);