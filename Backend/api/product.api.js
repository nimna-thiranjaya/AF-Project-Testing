const Product = require("../module/product.model");

const AddProduct = async (ctx) => {
  try {
    const productData = ctx.request.body;
    const product = await Product.create(productData);
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, product: product })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.messages })
    );
  }
};

const GetAllProduct = async (ctx) => {
  try {
    const products = await Product.find();
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, products: products })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.messages })
    );
  }
};
const GetOneProduct = async (ctx) => {
  try {
    const product = await Product.findById(ctx.params.id);
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, product: product })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.messages })
    );
  }
};
const DeleteProduct = async (ctx) => {
  try {
    const product = await Product.findByIdAndDelete(ctx.params.id);
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, product: product })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.messages })
    );
  }
};

const UpdateProduct = async (ctx) => {
  try {
    const data = ctx.request.body;
    const product = await Product.findByIdAndUpdate(ctx.params.id, data);
    return (
      (ctx.response.status = 200),
      (ctx.body = { success: true, product: product })
    );
  } catch (e) {
    return (
      (ctx.response.status = 500),
      (ctx.body = { success: false, message: e.messages })
    );
  }
};

module.exports = {
  AddProduct,
  GetAllProduct,
  GetOneProduct,
  DeleteProduct,
  UpdateProduct,
};
