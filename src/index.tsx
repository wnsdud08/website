import { Hono } from "hono";
import "dotenv/config";
import userRoute from "./routes/user.js";
import Layout from "./components/layout.js";

//await mongoose.connect("")

const app = new Hono();

app.use("*", async (c, next) => {
    c.setRenderer((content) => {
        return c.html(
            <Layout>
                {content}
            </Layout>
        );
    });
    await next();
});

app.route("/user", userRoute);

app.get("/", (c) => {
    return c.render(
        <>
            <title>인덱스</title>
            <h1>hi</h1>
        </>
    );
});

export default app;