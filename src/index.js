import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InPosts from "./pages/InPosts";
import InProducts from "./pages/InProducts";
import InUser from "./pages/InUser";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
import Users from "./pages/Users";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="inproducts/:id" element={<InProducts />} />
        <Route path="posts" element={<Posts />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="inuser/:id" element={<InUser />} />
        <Route path="inposts/:id" element={<InPosts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
