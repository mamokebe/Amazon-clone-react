import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/amazon-logo-white.png";
import flag from "../../assets/american-flag-small.png";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "./LowerHeader";
import { FiMapPin } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className={classes.header__container}>
        {/* left side link */}
        <div className={classes.logo}>
          <a href="">
            <img src={logo} alt="amazon logo" />
          </a>
        </div>

        <div className={classes.delivery__container}>
          <span>
            <FiMapPin size={20} />
          </span>
          <div className={classes.delivery}>
            <p>Delivery to Dallas</p>
            <span>Update location</span>
          </div>
        </div>
        {/* search */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <GoSearch size={25} />
        </div>
        {/* right side link */}
        <div className={classes.order__container}>
          <a href="" className={classes.language}>
            <img src={flag} alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <div>
              <p>Hello, Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="" className={classes.cart__container}>
            <div className={classes.cart}>
              <LuShoppingCart size={26} />
              <span>0</span>
            </div>
            <p>Cart</p>
          </a>
        </div>
      </div>
      <LowerHeader />
    </>
  );
};

export default Header;
