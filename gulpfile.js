var path                = require('path'); // core (built-in)
    gulp                = require('gulp'),
    gautoprefixer       = require('gulp-autoprefixer'),
    gcsso               = require('gulp-csso'),
    gstripCssComments   = require('gulp-strip-css-comments'),
    guglify             = require('gulp-uglify'),
    runSequence         = require('run-sequence')
    ;

/* minify js */

gulp.task('feuiminifyjs', function () {
    gulp.src('catalog/view/javascript/common*.js')
        .pipe(guglify())
        .pipe(gulp.dest('../shop/catalog/view/javascript/'));
	return gulp.src('catalog/view/javascript/jquery/datetimepicker/moment.js')
        .pipe(guglify())
        .pipe(gulp.dest('../shop/catalog/view/javascript/jquery/datetimepicker/'));	
});

gulp.task('feuiminifycss', function () {
    gulp.src('catalog/view/javascript/jquery/magnific/magnific-popup.css')
        .pipe(gstripCssComments({preserve: false}))
        .pipe(gautoprefixer({ browsers: ["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8",  "iOS >= 6", "Opera >= 12", "Safari >= 6"], cascade:false }))
        .pipe(gcsso())
        .pipe(gulp.dest('../shop/catalog/view/javascript/jquery/magnific/'));
	gulp.src('catalog/view/javascript/jquery/owl-carousel/*.css')
        .pipe(gstripCssComments({preserve: false}))
        .pipe(gautoprefixer({ browsers: ["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8",  "iOS >= 6", "Opera >= 12", "Safari >= 6"], cascade:false }))
        .pipe(gcsso())
        .pipe(gulp.dest('../shop/catalog/view/javascript/jquery/owl-carousel/'));
	return gulp.src('catalog/view/theme/cjt-orange-nocart/stylesheet/stylesheet.css')
        .pipe(gstripCssComments({preserve: false}))
        .pipe(gautoprefixer({ browsers: ["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8",  "iOS >= 6", "Opera >= 12", "Safari >= 6"], cascade:false }))
        .pipe(gcsso())
        .pipe(gulp.dest('../shop/catalog/view/theme/cjt-orange-nocart/stylesheet/'));		
});

gulp.task('minify', function(callback) {
    runSequence('feuiminifyjs', 'feuiminifycss',
                 callback);
});

gulp.task('default', function() {
    console.log('default task')
});





