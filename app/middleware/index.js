const path = require('path')
const bodyParser = require('koa-bodyparser')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')

module.exports = (app) => {
  // 静态服务器
  app.use(staticFiles(path.resolve(__dirname, '../public'), {
    // 指定缓存时长
    maxage: 30 * 24 * 60 * 60 * 1000
  }))

  app.use(bodyParser())

  app.use(miSend())
}