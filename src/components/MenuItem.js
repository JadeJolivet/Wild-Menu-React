import React, { useState } from "react";

function MenuItem(props) {
  //create a state isFavorite that has the inital value of isFavorite that comes from the props
  const [isFavorite, setFavorite] = useState(props.isFavorite);

  return (
    <section className="itemContainer">
      <figure className="imgContainer">
        <img src={props.foodImage} alt={props.itemName} />
        <figcaption>
          <h2>{props.itemName}</h2>
          <p>{props.description}</p>
        </figcaption>
      </figure>
      <span>{props.price} EUR</span>

      {/* the button to play with the isFavorite state:
              - onClick, will toggle the isFavorite state,
              - content will be conditionally rendered as "❤️" or "🖤", depending on the value of isFavorite
          */}
      <button type="button" onClick={() => setFavorite(!isFavorite)}>
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

export default MenuItem;
