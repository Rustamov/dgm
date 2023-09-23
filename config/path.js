
const pathSrc = "./src";
const pathDest = "./public";

export default {
  root: pathDest,

  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },

  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },

  js: {
    src: pathSrc + "/js/*.js",
    watch: pathSrc + "/js/**/*.js",
    dest: pathDest + "/js",
  },

  img: {
    src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
    watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
    dest: pathDest + "/img",
  },

  font: {
    src: pathSrc + "/font/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
    watch: pathSrc + "/font/**/*.{eot,ttf,otf,ttc,woff,woff2,svg}",
    dest: pathDest + "/font",
  }
}