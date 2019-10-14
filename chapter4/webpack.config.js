const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    //必须是绝对路径
    //__dirname是一个全局变量，获取当前文件夹所在路径
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  }
};
