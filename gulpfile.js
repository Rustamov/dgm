import gulp from "gulp";
import browserSync from "browser-sync";

//Configuration
import path from "./config/path.js";
import app from "./config/app.js";

//tasks
import pug from "./tasks/pug.js";
import clear from "./tasks/clear.js";
import scss from "./tasks/scss.js";
import js from "./tasks/js.js";
import img from "./tasks/img.js";
import font from "./tasks/font.js";



//Server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

//Watcher
const watcher = () => {
  gulp.watch(path.pug.watch, pug).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

//Delete

//tasks
export { pug, watcher, clear, scss, js, img, font };
// exports.pug = pug;
// exports.watcher = watcher;
// exports.clear = clear;
// exports.scss = scss;
// exports.js = js;
// exports.img = img;
// exports.font = font;

//build
const build = gulp.series(
  clear,
  gulp.parallel(pug, scss, js, img, font)
);

const dev = gulp.series(
  build,
  gulp.parallel(server, watcher)
)

export default app.isProd
  ? build
  : dev;