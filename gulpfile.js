let gulp = require("gulp");
const uglify = require("gulp-uglify-es").default;
const concat = require('gulp-concat');
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const autoprefixer = require("gulp-autoprefixer");
const yml = require('gulp-yml');


// Copy html files
gulp.task("copyHTML", function() {
  gulp.src("src/*.html")
      .pipe(gulp.dest("dist"));
});


// Minify and Concat JS
gulp.task("scripts", function() {
  return gulp.src("src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

// Compile sass and autoprefix if needed
gulp.task("sass", function() {
  gulp.src("src/scss/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest("dist/css"));
});

//Move .json
gulp.task('data', function () {
    gulp.src('src/data/**/*')
        .pipe(yml())
        .pipe(gulp.dest("dist/data"));
});


// Move fonts
gulp.task("fonts", function() {
  gulp.src("src/fonts/*")
      .pipe(gulp.dest("dist/fonts"));
});


// Optimize image size
gulp.task("imagemin", function() {
  gulp.src("src/img/*")
      .pipe(imagemin())
      .pipe(gulp.dest("dist/img"));
});

gulp.task("default", ["sass", "scripts", "imagemin", "copyHTML", "fonts", "data"]);

gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", ["sass"]);
    gulp.watch("src/js/*js", ["scripts"]);
    gulp.watch("src/img/*", ["imagemin"]);
    gulp.watch("src/*.html", ["copyHTML"]);
    gulp.watch("src/fonts/*", ["fonts"]);
    gulp.watch("src/data/**/*", ["data"]);
})