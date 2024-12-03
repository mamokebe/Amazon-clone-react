import React, { useContext } from "react";
import classes from "./Header.module.css";
import logo from "../../assets/amazon-logo-white.png";
import flag from "../../assets/american-flag-small.png";
import { GoSearch } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "./LowerHeader";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../utility/firebase";
import cart from "../../assets/cart-icon.png";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  // console.log(basket);
  return (
    <div className={classes.header__fixed}>
      <div className={classes.header__container}>
        {/* left side link */}
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="amazon logo" />
          </Link>
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
          <Link to="" className={classes.language}>
            <img src={flag} alt="flag" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>

          <Link to={!user && "/auth"}>
            <div>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </div>
          </Link>
          <Link to="/orders">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          <Link to="/cart" className={classes.cart__container}>
            <div className={classes.cart}>
              {/* <LuShoppingCart size={26} /> */}
              <img src={cart} alt="" />
              <span>{totalItem}</span>
            </div>
            <p>Cart</p>
          </Link>
        </div>
      </div>
      <LowerHeader />
    </div>
  );
};

export default Header;
