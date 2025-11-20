import React from "react";
import "./Recipes.css";

function Cart({ cart, total, back }) {
  return (
    <div className="p-3">
      <h2>Your Cart Items</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p>{item.name} — ₹{item.price}</p>
        ))
      )}

      <h3>Total Bill: ₹{total}</h3>
      
      <button className="btn btn-secondary mt-3" onClick={back}>
        Back to Recipes
      </button>
    </div>
  );
}

export default Cart;
