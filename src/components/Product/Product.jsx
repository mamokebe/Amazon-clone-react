import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";
import Loader from "../Loader/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const url = "https://fakestoreapi.com/products";
  const fetchAllProducts = async () => {
    try {
      // setIsLoading(true);
      const res = await axios.get(url);
      setProducts(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("data not found", error);
      setIsLoading(false);
    }
  };
  // console.log(products);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.product}>
          {products?.map((singleProduct, i) => {
            return <ProductCard key={i} product={singleProduct} />;
          })}
        </div>
      )}
    </>
  );
};

export default Product;
