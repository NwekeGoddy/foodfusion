import React from "react";
import Title from "../text/Title";
import classes from "./IngredientsTable.module.scss"

function IngredientsTable() {
  return (
    <>
      <Title className={classes.title}>Ingredients</Title>
      <table>

        <tbody></tbody>
      </table>
    </>
  );
}

export default IngredientsTable;
