import React, { useState } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const AddUser = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/users/add", {
        firstName,
        lastName,
        email,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className=" background align">
        <Navbar />
        <div className="signup">
          <div className="box container1">
            <h2>ADD USER</h2>
            <form onSubmit={AddUser}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>

              <input
                type="text"
                id="lname"
                name="lname"
                value={lastName}
                placeholder="Enter your last name..."
                onChange={(e) => setLastName(e.target.value)}
              ></input>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your email..."
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Enter your username..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <input className="submit1" type="submit" value="ADD" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
