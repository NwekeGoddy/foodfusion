import React, { useState, useEffect } from "react";
import classes from "./meals.module.scss";
import Image from "next/image";
import Text from "@/components/text/Text";
import Title from "@/components/text/Title";
import { BeatLoader } from "react-spinners";
import { FaHeartBroken, FaHeart } from "react-icons";
import { useRouter } from "next/router";
import axios from "axios";
import PointText from "@/components/text/PointText";
import { useQuery } from "@tanstack/react-query";
import IngredientsTable from "@/components/mealsPage/IngredientsTable";
import { Button } from "@/components/buttons/Button";
import { toast } from "react-hot-toast";

export const getSingleMeal = async ({ queryKey }) => {
  const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
  return data?.meals?.[0];
};

function SingleMealPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError, error } = useQuery(
    ["singleMeal", id],
    getSingleMeal
  );
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("savedMeals")) {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
      if (savedMeals.includes(id)) {
        setIsSaved(true);
      } else {
        setIsSaved(false);
      }
    }
  }, [id]);

  if (isError) {
    return <Text>Error: {error.message}</Text>;
  }

  if (isLoading || !data) {
    <BeatLoader color="#fff" />;
  }

  let ingredients = "";
  let ingredientsWithMeasures = "";

  if (data) {
    console.log(data);

    ingredients = Object.keys(data)
      .filter((key) => key.startsWith("strIngredient"))
      .filter((key) => data[key] !== "" && data[key] !== null);

    ingredientsWithMeasures = ingredients.map((key, index) => ({
      index: index + 1,
      ingredient: data[key],
      measure: data[`strMeasure${index + 1}`],
    }));
  }

  const handleSaveButtonClick = () => {
    if (localStorage.getItem("savedMeals") === null) {
      localStorage.setItem("savedMeals", JSON.stringify([data.idMeal]));
      toast.success("Meal Saved Successfully");
    } else {
      const savedMeals = JSON.parse(localStorage.getItem("savedMeals"));
      if (!isSaved) {
        console.log(savedMeals);
        savedMeals.push(data.idMeal);
        localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
        toast.success("Meal Saved Successfully");
        setIsSaved(true);
      } else {
        savedMeals.splice(savedMeals.indexOf(data.idMeal), 1);
        localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
        toast.error("Meal Removed Successfully");
        setIsSaved(false);
      }
    }
  };

  if (data) {
    return (
      <div className={classes.pageWrapper}>
        <div className={classes.topContainer}>
          <div className={classes.img}>
            <Image
              alt="each image"
              src={data.strMealThumb}
              height={300}
              width={300}
            ></Image>
          </div>
          <div className={classes.info}>
            <Title variant={"primary"}>{data.strMeal}</Title>
            <PointText className={classes.infoText}>
              Category: {data.strCategory}
            </PointText>
            <PointText className={classes.infoText}>
              Area: {data.strArea}
            </PointText>
            <PointText className={classes.infoText}>
              Tags: {data?.strTags?.split(",").join(", ")}
            </PointText>
            {isSaved && (
              <Text className={classes.greenText}>
                You already saved the meal.
              </Text>
            )}
            <Button
              variant="primary"
              className={classes.saveButton}
              onClick={handleSaveButtonClick}
            >
              {/* {isSaved ? (
                <>
                  <FaHeartBroken className={classes.saveIcon}></FaHeartBroken>{" "}
                  Remove
                </>
              ) : (
                <>
                  <FaHeart className={classes.saveIcon}></FaHeart>
                  Save
                </>
              )} */}

              {isSaved ? "Remove" : "Save"}
            </Button>
          </div>
        </div>

        <div className={classes.ingredientsTable}>
          <IngredientsTable ingredientsWithMeasures={ingredientsWithMeasures} />
        </div>

        <div className={classes.instructions}>
          <Title>Instructions</Title>
          {data.strInstructions
            .split(".")
            .filter((sentence) => sentence !== "")
            .map((sentence) => (
              <PointText key={sentence}>{sentence}.</PointText>
            ))}
        </div>
      </div>
    );
  }
}

export default SingleMealPage;
