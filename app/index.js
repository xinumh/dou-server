import Koa from 'koa'
import mongoose from 'mongoose'
import { mongodb, port } from './config'
import middleware  from './middleware'
import routes from './routes'


const app = new Koa()

mongoose.connect(mongodb)

middleware(app)
routes(app)

app.listen(port, () => {
  console.log(`✅ The server is running at http://localhost:${port}/`)
})

export default app