import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";
import Navbar from "../shared/Navbar";

const Login = () => {
  const [user, setUser] = useState({
    // username: "atuny0",
    // password: "9uQFF1Lh",
  });

  const notify = (type, message) => toast[type](message);

  let navigate = useNavigate();

  const UserLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://dummyjson.com/auth/login", user)
      .then(function (response) {
        console.log(response);
        localStorage.setItem("token", JSON.stringify(response.data.token));
        notify("success", "success");
        navigate(`/inuser/${response.data.id}`);
      })
      .catch(function (error) {
        notify("error", error);
        console.log(error);
      });
  };
  if (!user) return null;

  return (
    <>
      <ToastContainer />

      <div className="background align">
        <Navbar />
        <div className="box container1">
          <h2>LOGIN</h2>
          <form onSubmit={UserLogin} className="forma">
            <label for="userName">User Name:</label>
            <div className="formHolder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                class="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Type your username..."
                //   defaultValue={"atuny0"}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              ></input>
            </div>
            <label for="password">Password:</label>
            <div className="formHolder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                class="bi bi-lock-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password..."
                //   defaultValue={"9uQFF1Lh"}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              ></input>
            </div>
            <p>Forgot password?</p>
            <input className="button" type="submit" value="LOGIN" />
          </form>
          <div className="media">
            <p>Or Sign Up Using</p>
            <div className="mediaHolder">
              <div className="fb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </div>
              <div className="tw">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </div>
              <div className="go">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="one">
            <p>Have not account yet?</p>
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
