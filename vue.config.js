var webpack = require('webpack')
const path = require('path');
const merge = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    //路径配置
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', path.join(__dirname, 'src/assets'))
    config.module
      .rule("ts")
      .use("ts-loader")
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: "vant",
                libraryDirectory: "es",
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: "es2015"
          }
        });
        return options;
      });
  },

  pluginOptions: { // 第三方插件配置
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/index.less')]
    }
  },

  // webpack-dev-server 相关配置  
  devServer: {
    // 调试端口
    // port: 8989
  },
  //其他配置....
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    }
  }
}