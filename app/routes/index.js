import book from './book'

const routes = [book]

export default function (app) {
  routes.forEach((route) => {
    app
      .use(route.routes())
      .use(route.allowedMethods({
        throw: true
      }))
  })
}