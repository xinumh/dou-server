import Router from 'koa-router'
import { baseApi } from '../config'
import { insert } from '../controllers/book'

const api = 'book'

const router = new Router()

router.prefix(`/${baseApi}${api}`)

router.get('/insert', insert)

export default router