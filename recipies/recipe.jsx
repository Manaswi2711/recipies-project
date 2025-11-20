import React from "react";
import "./Recipes.css";
function RecipeCard({ item, addToCart }) {

  return (
 <div className="">
    
    <div className=" border m-2 p-3 hover text-center">
      <img src={item.image} />
      <h5>{item.name}</h5>
      <p>{item.cuisine}</p>
      <p>Rs.150{item.price}</p>
      <p>⭐{item.rating}</p>
       <button  class="button"
         onClick={() => addToCart(item)}   
      >
        Add to Cart
      </button>
    </div>
 </div>
  );
}

export default RecipeCard;
