const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "my-recording-script.js",
    path: path.resolve(__dirname, "dist"),
    library: "myRecordingScript",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  externals: {
    rrweb: "rrweb",
  },
};
