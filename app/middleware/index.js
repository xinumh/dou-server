import path from 'path'
import bodyParser from 'koa-bodyparser'
import staticFiles from 'koa-static'
import cors from 'koa2-cors'



module.exports = (app) => {
  // 跨域
  app.use(cors())

  // 静态服务器
  app.use(staticFiles(path.resolve(__dirname, '../public'), {
    // 指定缓存时长
    maxage: 30 * 24 * 60 * 60 * 1000
  }))
  app.use(bodyParser({enableTypes: ['json']}))
  // app.use(session(app))
}