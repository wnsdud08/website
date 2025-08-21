import { Hono } from "hono";

const userRoute = new Hono();

userRoute.get("/", (c) => {
    return c.text("nihao");
})

userRoute.get("/:id", (c) => {
    const id = c.req.param("id");
    return c.render(
        <>
            {id}
        </>
    );
})

export default userRoute;