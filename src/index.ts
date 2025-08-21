import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import 'dotenv/config'
import mongoose from 'mongoose'
//import userRoute from './routes/user'

//await mongoose.connect('')

const app = new Hono()

//app.route('/user', userRoute)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app