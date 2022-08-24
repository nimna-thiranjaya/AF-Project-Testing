const User = require("../module/user.model");
const bcrypt = require("bcrypt");
const Product = require("../module/product.model");

const UserRegister = async (ctx) => {
  try {
    const { fullname, address, nic, email, password, role } = ctx.request.body;

    const usercheck = await User.findOne({ email: email });
    if (usercheck) {
      throw new Error("User Already Exist");
    } else {
      const salt = await bcrypt.genSalt(10);

      const hashpassword = await bcrypt.hash(password, salt);
      const user = await User.create({
        fullname,
        address,
        nic,
        email,
        password: hashpassword,
        role,
      });
      return (
        (ctx.response.status = 200), (ctx.body = { success: true, user: user })
      );
    }
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

const GetOneUser = async (ctx) => {
  try {
    const user = await User.findById(ctx.params.id);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

const UpdateUser = async (ctx) => {
  try {
    const userdata = ctx.request.body;

    const user = await User.findByIdAndUpdate(ctx.params.id, userdata);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

const DeleteUser = async (ctx) => {
  try {
    const user = await User.findByIdAndDelete(ctx.params.id);
    return (
      (ctx.response.status = 200), (ctx.body = { success: true, user: user })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

const LoginUser = async (ctx) => {
  try {
    const userdata = ctx.request.body;
    const user = await User.findOne({ email: userdata.email });

    if (user) {
      const ismatch = await bcrypt.compare(userdata.password, user.password);
      if (ismatch) {
        const result = {
          token: user._id,
          role: user.role,
        };
        return (
          (ctx.response.status = 200),
          (ctx.body = { success: true, result: result })
        );
      } else {
        throw new Error("password not match...!");
      }
    } else {
      throw new Error("user not found...!");
    }
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

const AddToWishlist = async (ctx) => {
  try {
    const userdata = ctx.request.body;
    const productid = userdata.productid;
    const product = await Product.findById(productid);

    const productupdate = {
      pid: productid,
      pname: product.pname,
      unitPrice: product.unitPrice,
    };

    const wishlist = await User.findByIdAndUpdate(
      { _id: userdata.userid },
      { $push: { wishlist: productupdate } }
    );

    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, wishlist: wishlist })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.message })
    );
  }
};

module.exports = {
  LoginUser,
  UserRegister,
  GetOneUser,
  UpdateUser,
  AddToWishlist,
  DeleteUser,
};
