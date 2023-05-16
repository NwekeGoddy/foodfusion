import React from "react";
import Title from "../text/Title";
import Text from "../text/Text";
import classes from "./IngredientsTable.module.scss";

function IngredientsTable({ ingredientsWithMeasures }) {
  return (
    <>
      <Title className={classes.title}>Ingredients</Title>
      <table className={classes.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <Text>{ingredient.ingredient}</Text>
              </td>
              <td>
              <Text>{ingredient.measure}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IngredientsTable;
