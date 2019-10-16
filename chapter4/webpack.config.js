const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    //必须是绝对路径
    //__dirname是一个全局变量，获取当前文件夹所在路径
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  plugins: [
    new webpack.BannerPlugin("Copyright @DragonKnightOfBreeze")
  ],
  module: {
    //在这里配置loader
    rules: [
      {
        test: /\.css$/,
        //css-loader只负责加载，不负责解析，解析需要style-loader
        //使用多个loader时，从右向左读取
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      }, {
        //小于限制的情况下，会使用url-loader加载，将图片编译成base64字符串
        //大于的情况系，会使用file-loader加载
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8196,
              //打包后的图片的命名模版
              name: "img/[name].[hash:8].[ext]"
            }
          }
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }, {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  //用于解决vue打包报错
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js"
    }
  }
};
