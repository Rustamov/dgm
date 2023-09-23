import gulp from "gulp";

//Configuration
import path from "../config/path.js";
import app from "../config/app.js";

//plugins
import pugs from "gulp-pug";
import beautify from "gulp-jsbeautifier";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import shorthand from "gulp-shorthand";
import groupCssMediaQueries from 'gulp-group-css-media-queries';

import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";
import gulpif from "gulp-if";


export default () => {
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulpif(app.isProd, csso()))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
}


