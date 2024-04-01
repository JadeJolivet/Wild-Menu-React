import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  console.log(foodItems);
  return (
    <>
      {/*render a MenuItem component to each element of the props array*/}
      {foodItems.map((item, index) => (
        <MenuItem
          key={item.itemName}
          itemName={item.itemName}
          description={item.description}
          foodImage={item.foodImage}
          price={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </>
  );
}

export default MenuList;
