const HomeService = require('../service/home')

module.exports = {
  index: async(ctx, next) => {
    await ctx.render('home/index', {title: "admin 欢迎您！"})
  },

  // home
  home: async(ctx, next) => {
    console.log(ctx.request.query)
    console.log(ctx.request.querystring)
    ctx.response.body = `<h1>Home Page</h1>`
  },
  homeParams: async(ctx, next) => {
    console.log(ctx.params)
    const { id, name } = ctx.params
    ctx.response.body = `<h1>Home Page /${id}/${name}</h1>`
  },

  user: async(ctx, next) => {
    await ctx.render('home/login', {btnName: 'Gogo'})
  },

  login :async(ctx, next) => {
    const { name, password } = ctx.request.body
    const {status, data} =  await HomeService.login(name, password)
    
    if (status == '-1') {
      await ctx.render('home/login', {btnName: 'to Login'})
    } else {
      ctx.state.title = "个人中心"
      await ctx.send({data})
    }
  }
}