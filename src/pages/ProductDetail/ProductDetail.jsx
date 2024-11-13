import React, { useEffect, useState } from "react";
// import classes from "./ProductDetail.module.css";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../components/Api/endPoints";
import ProductCard from "../../components/Product/ProductCard";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  // console.log(productId);
  const fetchProductDetails = async () => {
    //initial loading
    try {
      setIsLoading(true);
      const res = await axios.get(`${productUrl}/products/${productId}`);
      setSingleProduct(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);
  console.log(singleProduct);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        singleProduct && (
          <ProductCard product={singleProduct} flex={true} renderDesc={true} />
        )
      )}
    </LayOut>
  );
};

export default ProductDetail;
