import React from "react";
import { categoryImage } from "./CategoryInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <div className={classes.category__container}>
      {categoryImage.map((infos, i) => (
        // key={i}
        <CategoryCard key={i} data={infos} />
      ))}
    </div>
  );
};

export default Category;
