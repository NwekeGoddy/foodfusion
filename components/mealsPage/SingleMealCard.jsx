import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./SingleMealCard.module.scss";
import Title from "../text/Title";

function SingleMealCard({ meal }) {
  return (
    <Link href={`/meals/${meal.idMeal}`} className={classes.item}>
      <Image src={meal.strMealThumb} height={200} width={200} alt=""></Image>
      <Title className={classes.title} variant="secondary">
        {meal.strMeal}
      </Title>
    </Link>
  );
}

export default SingleMealCard;
