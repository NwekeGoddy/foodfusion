import React from "react";
import classes from "./Footer.module.scss";
import Text from "../text/Text";
import FoodFusionLogo from "../../images/FoodFusion.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image alt="FoodFusion Logo" src={FoodFusionLogo}></Image>
      <Text>Find the perfect meal recipe for you</Text>

      <Text className={classes.copyright}> © &quot;FoodFusion&quot; 2023 All right reserved</Text>
    </footer>
  );
}

export default Footer;
