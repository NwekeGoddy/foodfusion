import React from "react";
import classes from "./Categories.module.scss";
import { BeatLoader } from "react-spinners";
import CategoryItem from "./CategoryItem";

export default function Categories({
  categories,
  categoriesIsLoading,
  categoriesIsError,
  selectedCategory,
  setSelectedCategory,
}) {
  if (categoriesIsLoading) {
    return <BeatLoader loading={categoriesIsLoading} color="#fff" />;
  } else {
    return (
      <div className={classes.categories__container}>
        {categories.map((item) => (
          <CategoryItem
            key={item.idCategory}
            category={item}
            selectedCategory={selectedCategory}
            onClickHandler={() => setSelectedCategory(item.strCategory)}
          />
        ))}
      </div>
    );
  }
}
