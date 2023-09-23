// import news from "../data/news.json" assert { type: "json" };;

const isProd = process.argv.includes("--production");
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  webpack: {
    mode: isProd ? "production" : "development"
  },

  imagemin: {
    verbose: true
  },

  fonter: {
    formats: ["ttf", "woff", "eot", "svg"]
  },

  pug: {
    // data: {
    //   news: news
    // }
  },
  
  beautify: {
    indent_char: ' ',
    indent_size: 4,
    inline: [
        'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'canvas', 'cite',
        'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 
        'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
        'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
        'strong', 'sub', 'sup', 'template', 'textarea', 'time', 'u', 'var',
        'video', 'wbr', 'text',
        // obsolete inline tags
        'acronym', 'big', 'strike', 'tt'
      ] //remove tags: a, span, svg, button, img,
  }
}