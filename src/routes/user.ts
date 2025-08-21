import { Hono } from 'hono'

const userRoute = new Hono()

userRoute.get('/', (c) => {
    return c.text("nihao")
})

export default userRoute