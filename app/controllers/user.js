import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { secret } from '../config'

class UserController {
  /**
   * login
   * curl -X POST http://localhost:3000/user/login/ -H 'cache-control: no-cache' -H 'content-type: application/x-www-form-urlencoded' -d 'username=admin&password=123456'
   * @param {*} ctx 
   */
  async login (ctx) {
    const { body } = ctx.request
    console.log('body', body)
    try {
      if (!body.username || !body.password) {
        ctx.status = 200
        ctx.body = {
          code: 1,
          message: '用户名密码不能为空'
        }
        return
      }
      /* 查询用户 */
      const user = await User.findOne({ username: body.username })
      console.log('user ', user )
      if (!user) {
        ctx.status = 200
        ctx.body = {
          code: 1,
          message: '用户不存在'
        }
        return
      }

      /* 匹配密码 */
      const passed = await bcrypt.compare(body.password, user.password)
      if (passed) {
        const token = jwt.sign({
          data: user,
          // token 过期时间 （比如：1h = 60 * 60）
          exp: Math.floor(Date.now() / 1000) + (60 * 60)
        }, secret)

        ctx.status = 200
        ctx.body = {
          code: 0,
          message: '登录成功',
          user: user.userInfo,
          token
        }
      } else {
        ctx.status = 200
        ctx.body = {
          code: 1,
          message: '密码错误'
        }
      }
    } catch (error) {
      ctx.throw(500)
    }
  }

  /**
   * register
   * curl -X POST http://localhost:3000/api/user/register  -H 'cache-control: no-cache' -H 'content-type: application/x-www-form-urlencoded'  -d 'username=admin&password=123456'
   * @param {*} ctx 
   * @returns 
   */
  async register(ctx) {
    const { body } = ctx.request
    console.log('body', body)
    try {
      if (!body.username || !body.password) {
        ctx.status = 400
        ctx.body = {
          code: 1,
          message: '用户名或密码不能为空'
        }
        return
      }
      body.password = await bcrypt.hash(body.password, 5)
      let user = await User.find({ username: body.username })
      if (!user.length) {
        const newUser = new User(body)
        user = await newUser.save()
        ctx.status = 200
        ctx.body = {
          code: 0,
          message: '注册成功',
          user
        }
      } else {
        ctx.status = 200
        ctx.body = {
          code: 1,
          message: '用户名已存在'
        }
      }
    } catch (error) {
      ctx.throw(500)
    }
  }
}


export default new UserController()