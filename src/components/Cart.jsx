import React from "react";
import '../App.css';


function Cart({ cartItems, onIncrement, onRemove }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-img" />
            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => onIncrement(item)}>+1</button>
              <button onClick={() => onRemove(item)}>Remove</button>
            </div>
          </div>
        ))
      )}

    </div>
  );
}

export default Cart;
