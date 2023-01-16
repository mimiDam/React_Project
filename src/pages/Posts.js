import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/posts.css";
import Navbar from "../shared/Navbar";

const Posts = () => {
  const [post, setPost] = useState();

  useEffect(() => {
    axios.get("https://dummyjson.com/posts").then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;
  const { posts, total } = post;
  return (
    <>
      <Navbar />
      <div className="container-post">
        {posts.map((data) => {
          const { id, title, body } = data;
          return (
            <Link to={`/inposts/${data.id}`}>
              <div key={id} className="posts color">
                <p>"{title}"</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
