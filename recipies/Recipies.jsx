import React, { useEffect, useState } from "react";
import "./Recipes.css";
import RecipeCard from "./recipe";


function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
 
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(data => {
        setRecipes(data.recipes);
      });
  }, []);


  function addToCart(item) {
    setCart([...cart, item]);
     setShowCart(true);
  }
  const total = cart.reduce((sum, item) => sum + (item.price || 100), 0);

   function goToCart() {
    setShowCart(true);
  }

  function backToRecipes() {
    setShowCart(false);
  }
  return (
    <div className="">

      <h1 className="mt-3 text-center">Recipes Here</h1>
      {!showCart && (
        <button className="btn btn-primary mb-3" onClick={goToCart}>
          Go to Cart
        </button>
      )}

      {showCart && (
        <button className="btn btn-secondary mb-3" onClick={backToRecipes}>
          Back to Recipes
        </button>
      )}

      
      <div className="d-flex flex-wrap">
        {recipes.map((item, index) => (
          <RecipeCard  
            item={item}
            addToCart={addToCart}>

            </RecipeCard>
        ))}
      </div>

         
    </div>
  );
}

export default Recipes;
