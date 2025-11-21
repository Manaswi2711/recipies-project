import React from "react";
import "./Recipes.css";

function Cart({ cart, total, back }) {
  return (
    
    <div className="p-3"style={{marginLeft:"1350px"}} >
      <h2>Your Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p>{item.name}-- ₹{item.price||150}</p>
        
        ))
      )}

      <h3>Total Bill: ₹{total}</h3>
     
    </div>
 
  );
}

export default Cart;
