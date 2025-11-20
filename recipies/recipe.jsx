import React from "react";
import "./Recipies.css";

function RecipeCard({ item, addToCart }) {

  return (
 <div className="">
    <div className=" border m-2 p-3 hover text-center">
      <img src={item.image} />
      <h5>{item.name}</h5>
      <p>{item.cuisine}</p>
      <p>{item.price}</p>
      <p>⭐{item.rating}</p>
       <button 
        className="btn btn-primary"
        onClick={() => addToCart(item)}   
      >
        Add to Cart
      </button>
    </div>
 </div>
  );
}

export default RecipeCard;
