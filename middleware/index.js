const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')
const miSend = require('./mi-send')
// const miConnect = require('./mi-connect')

module.exports = (app) => {
  // 静态服务器
  app.use(staticFiles(path.resolve(__dirname, '../public'), {
    // 指定缓存时长
    maxage: 30 * 24 * 60 * 60 * 1000
  }))

  // 模版引擎
  app.use(nunjucks({
    // 指定试图文件后缀
    ext: 'html',
    // 指定试图目录
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
      // 开启转移，防止 Xss 漏洞
      trimBlocks: true
    }
  }))
  app.use(bodyParser())

  app.use(miSend())
  // app.use(miConnect())
}