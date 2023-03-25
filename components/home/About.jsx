import React from "react";
import classes from "./About.module.scss";
import Title from "../text/Title";
import Text from "../text/Text";

function About() {
  return (
    <div className={classes.about}>
      <Title>What is FoodFusion</Title>

      <Text>
        Welcome to Food Fusion, your go-to app for discovering new and delicious
        recipes from around the world. Whether you&apos;re a seasoned home cook
        or a newbie in the kitchen, our app has something for everyone.
        <br />
        <br />
        Our app features a curated collection of recipes that have been tested
        and approved by our team of expert chefs. From classic dishes to fusion
        cuisine, we&apos;ve got it all. Our easy-to-follow recipes come with
        step-by-step instructions, photos, and videos to help you recreate the
        dishes in your own kitchen.
        <br />
        <br />
        We know that everyone has different dietary needs and preferences, which
        is why we&apos;ve made it easy for you to filter our recipes by dietary
        restrictions such as gluten-free, vegan, and low-carb. You can also save
        your favorite recipes to your personal recipe box and create your own
        meal plans for the week.
        <br />
        <br />
        At Food Fusion, we believe that cooking should be a fun and enjoyable
        experience, which is why we&apos;ve created an app that is user-friendly and
        accessible for all. Whether you&apos;re looking to impress your guests with a
        fancy dinner party or whip up a quick and easy weeknight meal, we&apos;ve got
        you covered.
        <br />
        <br />
        Thank you for choosing Food Fusion. We hope that our app will inspire
        you to get creative in the kitchen and explore the wonderful world of
        food.
      </Text>
    </div>
  );
}

export default About;
