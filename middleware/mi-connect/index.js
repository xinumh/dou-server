const { connect, close } = require('../../conn')

// 数据库连接
module.exports = () => {
  return async (ctx, next) => {
    console.log('11', 11)
    await connect()
    await next()
    await close()
  }
}