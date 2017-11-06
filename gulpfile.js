var gulp = require('gulp');
var scss = require('gulp-scss'); //name your var however you want but require the same name that in package.json file
var browserSync = require('browser-sync');
var imageMin = require('gulp-imagemin');

gulp.task('sass', function(){ //name my task whatever I like
    return gulp.src(['app/sass/styles.scss', 'app/sass/effects.scss', 'app/sass/font-awesome/font-awesome.scss']) //source from where I take these files
    .pipe(scss()) //how I declared it when required it
    .pipe(gulp.dest('pro/css')) //destination where I put its files
    .pipe(browserSync.reload({stream: true}))
    })

gulp.task('imageMin', function(){
    return gulp.src('app/img_src/*')
    .pipe(imageMin())
    .pipe(gulp.dest('pro/img'))
    .pipe(browserSync.reload({stream: true}))
    })

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: './'
        }
        })
    })

gulp.task('watch', ['browser-sync', 'imageMin'], function(){ //all tasks I launch before watch task
    // files I listen to in the watch process
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
    })