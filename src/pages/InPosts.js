import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";

const InPosts = () => {
  let { id } = useParams();
  const [po, setPo] = useState();

  const InPostsNew = () => {
    axios.get(`https://dummyjson.com/posts/${id}`).then((response) => {
      setPo(response.data);
    });
  };

  useEffect(() => {
    InPostsNew();
  }, []);

  useEffect(() => {
    InPostsNew();
  }, [id]);

  if (!po) return null;
  const { title, body, tags } = po;

  return (
    <>
      <Navbar />
      <section className="product-box">
        <div className="product-button triangle-buttons">
          <Link to={`/inposts/${parseInt(id) - 1}`}>
            <div class="triangle-buttons__triangle triangle-buttons__triangle--l"></div>
          </Link>
        </div>
        <div key={id} className="inposts color">
          <h2>"{title}"</h2>
          <h4>{body}</h4>
          <p>Tags:</p>
          {tags.map((data) => {
            return <p>{data}</p>;
          })}
        </div>
        <div className="product-button triangle-buttons">
          <Link to={`/inposts/${parseInt(id) + 1}`}>
            <div class="triangle-buttons__triangle triangle-buttons__triangle--r"></div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default InPosts;
