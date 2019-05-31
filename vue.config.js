
// 详细配置参数请参考：https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE

// const path = require('path')

module.exports = {
  productionSourceMap:false,
  // webpack相关
  chainWebpack: config => {
    // console.log("config",config)
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
