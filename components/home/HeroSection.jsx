import Image from "next/image";
import React from "react";
import HeroImg from "../../images/HeroImage.jpg";
import Text from "../text/Text";
import classes from "./HeroSection.module.scss";
import ButtonWithLink from "../buttons/Button";

function HeroSection() {
  return (
    <section className={classes.hero__section}>
      <div className={classes.hero__container}>
        <div className={classes.hero__info}>
          <h1 className={classes.hero__title}>
            Find the perfect <span>meal recipe</span> for you
          </h1>
          <Text>A listing website of meal recipe</Text>

          <div className={classes.hero__buttons}>
            <ButtonWithLink link={"/meals"} variant="primary">ExploreMeals</ButtonWithLink>
            <ButtonWithLink link={"/savedMeals"} >Saved Meals</ButtonWithLink>
          </div>
        </div>

        <div className={classes.hero__img}>
          <Image src={HeroImg} alt="Hero Image"></Image>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
