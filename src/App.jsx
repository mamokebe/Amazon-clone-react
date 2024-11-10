import React from "react";
import Header from "./components/Header/Header";
import CarouselEffect from "./components/CarouselEffect/carouselEffect";
import Category from "./components/Category/Category";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Category />
      <Product />
    </div>
  );
};

export default App;
