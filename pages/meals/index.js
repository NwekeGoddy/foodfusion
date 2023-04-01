import React from "react";
import classes from "./meals.module.scss";
import SearchBar from "@/components/mealsPage/SearchBar";
import PointText from "@/components/text/PointText";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Categories from "@/components/categories/Categories";

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

function Meals() {
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(["categories"], getCategories);

  return (
    <div className={classes.meals__page}>
      <SearchBar />
      <PointText className={classes.text}>
        search meals or select categories below
      </PointText>
      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
      ></Categories>
    </div>
  );
}

export default Meals;
