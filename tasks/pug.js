import gulp from "gulp";
//Configuration
import path from "../config/path.js";
import app from "../config/app.js";

//plugins
import pugs from "gulp-pug";
import beautify from "gulp-jsbeautifier";
import webpHtml from "gulp-webp-html";

export default () =>{
  return gulp.src(path.pug.src)
    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(beautify(app.beautify))
    .pipe(gulp.dest(path.pug.dest))
}


