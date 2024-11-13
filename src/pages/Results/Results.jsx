import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../components/Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const Results = () => {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { categoryName } = useParams();
  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        `${productUrl}/products/category/${categoryName}`
      );
      setResult(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products_container}>
          {result?.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      )}
    </LayOut>
  );
};

export default Results;
