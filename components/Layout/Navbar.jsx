import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./Navbar.module.scss";
import FoodFusionLogo from '../../images/FoodFusion.png'

export default function Navbar() {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.logo} href="/">
        <Image  alt='FoodFusion Logo' src={FoodFusionLogo}></Image>
      </Link>

      <ul className={classes.navLinks}>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/savedMeals">Saved Lists</Link>
        </li>
      </ul>
    </nav>
  );
}
