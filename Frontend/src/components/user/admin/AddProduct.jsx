import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [pname, setpname] = useState("");
  const [qty, setqty] = useState();
  const [description, setdescription] = useState("");
  const [unitPrice, setunitPrice] = useState();

  const onAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      pname,
      qty,
      description,
      unitPrice,
    };
    axios.post("http://localhost:3000/product/", newProduct).then((res) => {
      if (res.data.success) {
        alert("product added.....!");
      }
    });
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={onAddProduct}>
        Product Name :
        <input
          type="text"
          onChange={(e) => {
            setpname(e.target.value);
          }}
        />
        <br /> <br />
        Product Quantity :
        <input
          type="text"
          onChange={(e) => {
            setqty(e.target.value);
          }}
        />
        <br /> <br />
        Product Description :
        <input
          type="text"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <br /> <br />
        Unit Price :
        <input
          type="text"
          onChange={(e) => {
            setunitPrice(e.target.value);
          }}
        />
        <br /> <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
