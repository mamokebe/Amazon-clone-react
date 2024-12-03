import React, { useContext } from "react";
import classes from "./Cart.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../utility/action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  // console.log(basket);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <div className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h4>Your shopping basket</h4>
          <hr />
          {basket?.length == 0 ? (
            <h4>Opps ! No items in your cart</h4>
          ) : (
            basket?.map((item) => {
              return (
                <div className={classes.cart_product}>
                  <ProductCard
                    key={item}
                    product={item}
                    renderDesc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp size={25} />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown size={25} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <h3>Order Summary</h3>
            <div className={classes.summary__details}>
              <div className={classes.summary__total}>
                <p>Subtotal ({basket?.length} items)</p>
                {/* <CurrencyFormat amount={total} /> */}
              </div>
              <div className={classes.summary__item}>
                <span>Price:</span>
                <CurrencyFormat amount={total} />
              </div>
              <div className={classes.summary__item}>
                <span>Delivery:</span>
                <span>Free</span>
              </div>
              <div className={classes.summary__item}>
                <span>tax (10%):</span>
                <CurrencyFormat amount={total * 0.1} />
              </div>

              <div className={classes.summary__item}>
                <span>Total price:</span>
                <CurrencyFormat amount={total + total * 0.1} />
              </div>

              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
            </div>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </div>
    </LayOut>
  );
};

export default Cart;
