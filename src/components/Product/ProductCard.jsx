import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";

const ProductCard = ({ product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = product;
  // const { rate, count } = rating;
  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <div className={classes.title}>
          <h3>{title}</h3>
          {renderDesc && <p>{description}</p>}
        </div>
        <div className={classes.rating}>
          {/* rating from mui */}
          <Rating value={rating.rate} precision={0.1} />
          {/* <Rating value={4.3} precision={0.1} /> */}

          {/*count*/}
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
