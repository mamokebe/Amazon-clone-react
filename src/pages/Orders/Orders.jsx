import React, { useContext, useEffect, useState } from "react";
import classes from "./Orders.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../utility/firebase";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";

const Orders = () => {
  //contact db to get data from firestore database
  //get user and basket data from useContext
  //external database query
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          // console.log(snapshot);
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  return (
    <LayOut>
      <div className={classes.container}>
        <div className={classes.order__container}>
          {/* header title */}
          <h2>Your Orders</h2>
          {/* if user do not have any order */}
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>You don't have orders yet</div>
          )}
          {/* ordered items */}
          <div>
            {orders?.map((eachOrders, i) => {
              return (
                <div key={i}>
                  <hr />
                  <p>Order Id: {eachOrders.id}</p>
                  {eachOrders?.data?.basket?.map((order) => {
                    return (
                      <ProductCard product={order} flex={true} key={order.id} />
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Orders;
