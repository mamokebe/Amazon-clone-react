import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../components/Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";

const Results = () => {
  const [result, setResult] = useState([]);
  const { categoryName } = useParams();
  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        `${productUrl}/products/category/${categoryName}`
      );
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <LayOut>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category / {categoryName}</p>
      <hr />
      <div className={classes.products_container}>
        {result?.map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </LayOut>
  );
};

export default Results;
