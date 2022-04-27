const router = require('koa-router')()
const multer = require('koa-multer')
const HomeController = require('./controller/home')
const UploadController = require('./controller/upload')

const upload = multer({dest: 'uploads/'})
const types = upload.single('avatar')
module.exports = (app) => {
  // 根路由
  router.get('/', HomeController.index)
  // home
  router.get('/home', HomeController.home)
  router.get('/home/:id/:name', HomeController.homeParams)
  router.get('/user', HomeController.user)
  router.post('/user/login', HomeController.login)

  router.get('/upload', UploadController.upload)
  router.post('/profile', types, UploadController.profile)
  app.use(router.routes()).use(router.allowedMethods())
}