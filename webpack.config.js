const path = require("path");

module.exports = {
  mode: "development",
  entry: "./server/index.js",
  target:'node',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }
};
