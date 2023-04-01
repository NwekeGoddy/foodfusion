import React from "react";
import classes from "./Categories.module.scss";

export default function Categories({
  categories,
  categoriesIsLoading,
  categoriesIsError,
}) {
  return <div className={classes.categories__container}></div>;
}
