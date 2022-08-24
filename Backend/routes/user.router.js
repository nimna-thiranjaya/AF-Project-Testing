const Router = require("@koa/router");

const {
  UserRegister,
  GetOneUser,
  UpdateUser,
  DeleteUser,
  LoginUser,
  AddToWishlist,
} = require("../api/user.api");

const UserRouter = new Router({
  prefix: "/user",
});

UserRouter.post("/", UserRegister);
UserRouter.get("/:id", GetOneUser);
UserRouter.put("/:id", UpdateUser);
UserRouter.delete("/:id", DeleteUser);
UserRouter.post("/login", LoginUser);
UserRouter.post("/wishlist", AddToWishlist);
module.exports = UserRouter;
