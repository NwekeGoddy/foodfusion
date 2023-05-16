import React, { useState, useEffect } from "react";
import classes from "./meals.module.scss";
import SearchBar from "@/components/mealsPage/SearchBar";
import PointText from "@/components/text/PointText";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Categories from "@/components/categories/Categories";
import { BeatLoader } from "react-spinners";
import SingleMealCard from "@/components/mealsPage/SingleMealCard";

const override = {
  display: "inline-block",
  margin: "0 auto",
};

const getCategories = async () => {
  const { data } = await axios.get("/categories.php");
  return data.categories;
};

const getMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`/filter.php?c=${queryKey[1]}`);
  return data?.meals || [];
};

const getQueriedMeals = async ({ queryKey }) => {
  const { data } = await axios.get(`/search.php?s=${queryKey[1]}`);
  return data?.meals || [];
};

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");
  const [query, setQuery] = useState("");

  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery(["categories"], getCategories);

  const { data, isLoading, isError } = useQuery(
    ["mealsByCategory", selectedCategory],
    getMeals,
    { enabled: query === "" }
  );

  const { data: queriedData, isLoading: queryIsLoading } = useQuery(
    ["mealsByQuery", query],
    getQueriedMeals,
    { enabled: query !== "" }
  );

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0].strCategory);
    }
  }, [categories]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchText) {
        setQuery(searchText);
        setSelectedCategory("");
      } else {
        setQuery("");
        if (categories) {
          setSelectedCategory(categories[0].strCategory);
        }
      }
    }, 300);

    return () => {
      setQuery("");
      clearTimeout(timeout);
    };
  }, [searchText, categories]);

  return (
    <div className={classes.meals__page}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <PointText className={classes.text}>
        search meals or select categories below
      </PointText>
      <Categories
        categories={categories}
        categoriesIsLoading={categoriesIsLoading}
        categoriesIsError={categoriesIsError}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setQuery ={setQuery}
      ></Categories>

      {isLoading || categoriesIsLoading ? (
        <div className={classes.loadingSpinner}>
          <BeatLoader
            color="#fff"
            loading={isLoading || categoriesIsLoading}
            cssOverride={override}
            size={20}
          ></BeatLoader>
        </div>
      ) : null}

      <div className={classes.meals__container}>
        {!isLoading &&
          !isError &&
          data &&
          data.map((meal) => <SingleMealCard meal={meal} key={meal.idMeal} />)}

        {!queryIsLoading &&
          queriedData &&
          queriedData.map((meal) => (
            <SingleMealCard key={meal.idMeal} meal={meal} />
          ))}
      </div>
    </div>
  );
}

export default Meals;
