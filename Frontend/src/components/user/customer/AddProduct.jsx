import axios from "axios";
import React, { useState, useEffect } from "react";

const AddProduct = () => {
  const [products, setproducts] = useState([]);
  const [productid, setproductid] = useState();

  const userid = window.localStorage.getItem("AUTH");

  useEffect(() => {
    axios.get("http://localhost:3000/product/").then((res) => {
      if (res.data.success) {
        setproducts(res.data.products);
      }
    });
  }, []);

  //console.log(products);

  const onAddToWishlist = (e) => {
    e.preventDefault();

    const data = {
      productid,
      userid,
    };
    axios.post("http://localhost:3000/user/wishlist", data).then((res) => {
      if (res.data.success) {
        alert("product Add Successfull...!");
      }
    });
  };

  return (
    <div>
      <h3>Add to wishlist</h3>
      <form onSubmit={onAddToWishlist}>
        Product :{" "}
        <select
          onChange={(e) => {
            setproductid(e.target.value);
          }}
        >
          <option selected>select products</option>
          {products.map((products) => (
            <option key={products._id} value={products._id}>
              {products.pname}
            </option>
          ))}
        </select>
        <br />
        <br />
        <input type="submit" value="Add to wishlist" />
      </form>
    </div>
  );
};

export default AddProduct;
