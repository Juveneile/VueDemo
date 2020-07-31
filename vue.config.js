const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  },
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/style/_variable.scss";'
      }
    }
  },

  devServer: {
    proxy: {
      '/hvd-api': {
        target: 'http://localhost:9001',
        pathRewrite: {
          '^/hvd-api': '/'
        }
      }
    }
  }
}
