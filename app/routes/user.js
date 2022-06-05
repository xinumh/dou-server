import Router from 'koa-router'
import { baseApi } from '../config'
import UserController from '../controllers/user'

const api = 'user'

const router = new Router()

router.prefix(`/${baseApi}${api}`)

router.post('/login', UserController.login)
router.post('/register', UserController.register)

export default router