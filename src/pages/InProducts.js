import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../shared/Navbar";
import "../css/inproducts.css";

const InProducts = () => {
  let { id } = useParams();
  const [prod, setProd] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [quantity, setQuantity] = useState(0);

  const New = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProd(response.data);
      setThumbnail(response.data.thumbnail);
    });
  };

  useEffect(() => {
    New();
  }, [id]);

  const Plus = () => {
    setQuantity(quantity + 1);
  };

  const Minus = () => {
    setQuantity(quantity - 1);
  };

  if (!prod) return null;
  const { title, description, price, brand, images, category } = prod;

  return (
    <>
      <Navbar />
      <section className="product-box">
        <div className="product-button triangle-buttons">
          <Link to={`/inproducts/${parseInt(id) - 1}`}>
            {/* <button>Preview</button> */}
            <div class="triangle-buttons__triangle triangle-buttons__triangle--l"></div>
          </Link>
        </div>
        <div className="product-body">
          <div className="imgWrap">
            <img className="wrap" src={thumbnail} />
            <div className="thumbnail">
              {images.map((image) => (
                <img
                  className="singleProductImg"
                  src={image}
                  key={image.id}
                  onClick={() => setThumbnail(image)}
                />
              ))}
            </div>
          </div>
          <div className="prodBox">
            <h3>{title}</h3>
            <p>
              <b>Description:</b>
              <span>{description}</span>
            </p>
            <p>
              <b>Category:</b>
              <span>{category}</span>
            </p>
            <p>
              <b>Brand:</b>
              <span>{brand}</span>
            </p>
            <p>
              <h2>${price}</h2>
            </p>
            <hr></hr>
            <div className="quantity">
              <button onClick={Plus}>+</button>
              <p>{quantity}</p>
              <button onClick={Minus}>-</button>
            </div>
            <div className="chart">
              <button>Add to Chart</button>
            </div>
          </div>
        </div>
        <div className="product-button triangle-buttons">
          <Link to={`/inproducts/${parseInt(id) + 1}`}>
            {/* <button>Next</button> */}
            <div class="triangle-buttons__triangle triangle-buttons__triangle--r"></div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default InProducts;
