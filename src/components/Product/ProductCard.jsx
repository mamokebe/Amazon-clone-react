import React, { useContext } from "react";
import classes from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/action.type";

const ProductCard = ({ product, flex, renderDesc, renderAdd }) => {
  const { image, title, id, rating, price, description } = product;

  const [state, dispatch] = useContext(DataContext);
  // console.log(state);
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

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
        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
