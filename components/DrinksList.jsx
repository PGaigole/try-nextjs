import Link from "next/link";
import React from "react";

const DrinksList = ({ drinks }) => {
  return (
    <ul>
      drinks.map((drink) => (
      <li key="drink.idDrink">
        <Link href={`/bar/${drink.idDrink}`}>{drink.strDrink}</Link>
      </li>
      ))
    </ul>
  );
};

export default DrinksList;
