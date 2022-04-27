const fs = require('fs')
const path = require('path')

module.exports = {
  upload: async (ctx, next) => {
    await ctx.render('upload/index')
  },
  profile: async (ctx, next) => {
    const { originalname, path: out_path, mimetype } = ctx.req.file
    const reName = out_path+path.parse(originalname).ext
    const err = fs.renameSync(out_path, reName)
    let result

    if (err) {
      result = JSON.stringify(err)
    } else {
      result = `<h1>upload success</h1>`
    }

    ctx.response.body = result
  }
}