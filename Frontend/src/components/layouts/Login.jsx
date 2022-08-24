import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onLoging = (e) => {
    e.preventDefault();
    const usedata = {
      email,
      password,
    };

    console.log(usedata);
    axios
      .post("http://localhost:3000/user/login", usedata)
      .then((res) => {
        if (res.data.success) {
          window.localStorage.setItem("AUTH", res.data.result.token);
          if (res.data.result.role === "Admin") {
            window.location.href = "/ahome";
          } else {
            window.location.href = "/chome";
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <h3>User Login Page</h3>
      <form onSubmit={onLoging}>
        Email :
        <input
          type="text"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <br />
        <br />
        Password :
        <input
          type="text"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <a href="/register">
        <button>User Regiter</button>
      </a>
    </div>
  );
};

export default Login;
