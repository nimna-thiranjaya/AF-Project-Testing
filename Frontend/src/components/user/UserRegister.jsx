import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserRegister = () => {
  const [fullname, setfullname] = useState("");
  const [address, setaddress] = useState("");
  const [nic, setnic] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [role, setrole] = useState("");

  let navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();

    const newuser = {
      fullname,
      address,
      nic,
      email,
      password,
      role,
    };

    if (password === cpassword) {
      axios
        .post("http://localhost:3000/user", newuser)
        .then((res) => {
          if (res.data.success) {
            alert("User Registration Successful....!");
            navigate("/");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      alert("Password not match....!");
    }
  };

  return (
    <div>
      <h3>UserRegister</h3>
      <form onSubmit={onRegister}>
        Full Name :
        <input
          type="text"
          onChange={(e) => {
            setfullname(e.target.value);
          }}
        />
        <br />
        <br />
        Address :
        <input
          type="text"
          onChange={(e) => {
            setaddress(e.target.value);
          }}
        />
        <br />
        <br />
        NIC :
        <input
          type="text"
          onChange={(e) => {
            setnic(e.target.value);
          }}
        />
        <br />
        <br />
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
        Confirm Password :
        <input
          type="text"
          onChange={(e) => {
            setcpassword(e.target.value);
          }}
        />
        <br />
        <br />
        Role :
        <select
          onChange={(e) => {
            setrole(e.target.value);
          }}
        >
          <option selected>Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Customer">Customer</option>
        </select>
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default UserRegister;
