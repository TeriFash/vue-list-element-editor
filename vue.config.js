const path = require("path");

module.exports = {
  runtimeCompiler: true,
  parallel: false,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      // load which style file you want to import globally
      patterns: [path.resolve(__dirname, "./src/scss/main.scss")]
    }
  },
  css: {
    sourceMap: true
    //   loaderOptions: {
    //     sass: {
    //         prependData: `@import "@/scss/index.scss";`
    //     }
    // }
  }
};
