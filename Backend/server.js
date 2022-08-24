const koa = require("koa");
const bodyparser = require("koa-bodyparser");
const cors = require("@koa/cors");
const { connection } = require("./database/connection");
const UserRouter = require("./routes/user.router");
const ProductRouter = require("./routes/product.router");

const app = new koa();

app.use(bodyparser());
app.use(cors());
app.use(UserRouter.routes()).use(UserRouter.allowedMethods());
app.use(ProductRouter.routes()).use(ProductRouter.allowedMethods());

app.listen(3000, () => {
  console.log("Server run on port 3000");
  connection();
});
