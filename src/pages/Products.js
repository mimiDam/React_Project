import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/products.css";
import Navbar from "../shared/Navbar";

const Products = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data);
      console.log(response.data);
    });
  }, []);

  if (!product) return null;
  const { products, total } = product;
  return (
    <>
      <Navbar />
      <section className="bodyP ">
        <div className="titleP ">
          <h1>OnLine SHOP</h1>
        </div>
        <div className="containerP">
          {products.map((data) => {
            const { id, title, price, brand, category, thumbnail } = data;
            return (
              <div className="productBox">
                {/* <Link to={`/inproducts/${data.id}`}> */}
                <div key={id} className="productInfo">
                  <div className="productImg">
                    <img src={thumbnail} />
                  </div>
                  <h4>{brand}</h4>
                  <h2>{title}</h2>
                  <h2>
                    <span>Price:</span>
                    {price}$
                  </h2>
                </div>
                <Link to={`/inproducts/${data.id}`}>
                  <div className="details">
                    <button>View More ...</button>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
