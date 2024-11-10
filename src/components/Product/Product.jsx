import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import axios from "axios";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  const url = "https://fakestoreapi.com/products";
  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (error) {
      console.log("data not found", error);
    }
  };
  // console.log(products);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div className={classes.product}>
      {products?.map((singleProduct, i) => {
        return <ProductCard key={i} product={singleProduct} />;
      })}
    </div>
  );
};

export default Product;
