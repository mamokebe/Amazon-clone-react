import React from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";

const ProductCard = ({ product }) => {
  const { image, title, id, rating, price } = product;
  return (
    <div className={`${classes.card__container}`}>
      <a href="">
        <img src={image} alt="" />
      </a>
      <div className={classes.title}>
        <h3>{title}</h3>
      </div>
      <div className={classes.rating}>
        {/* rating from mui */}
        <Rating value={rating.rate} precision={0.1} />
        {/*count*/}
        <small>{rating.count}</small>
      </div>
      <div>
        <CurrencyFormat amount={price} />
      </div>
      <button className={classes.button}>add to cart</button>
    </div>
  );
};

export default ProductCard;
