const Router = require("@koa/router");

const {
  AddProduct,
  GetAllProduct,
  GetOneProduct,
  DeleteProduct,
  UpdateProduct,
} = require("../api/product.api");

const ProductRouter = new Router({
  prefix: "/product",
});
ProductRouter.post("/", AddProduct);
ProductRouter.get("/", GetAllProduct);
ProductRouter.get("/:id", GetOneProduct);
ProductRouter.delete("/:id", DeleteProduct);
ProductRouter.put("/:id", UpdateProduct);

module.exports = ProductRouter;
