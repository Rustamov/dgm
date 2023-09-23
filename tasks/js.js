import gulp from "gulp";

//Configuration
import path from "../config/path.js";
import app from "../config/app.js";

//plugins
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import webpack from "webpack-stream";
import gulpif from "gulp-if";


export default () => {
  return gulp.src(path.js.src, { sourcemaps: app.isDev })
    .pipe(babel())
    .pipe(webpack(app.webpack))
    .pipe(gulpif(app.isProd, uglify()))
    .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
}


