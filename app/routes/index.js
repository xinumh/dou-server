import book from './book'
import user from './user'


const routes = [book, user]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
}