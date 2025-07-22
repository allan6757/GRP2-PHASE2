import React from "react";
import { useCart } from "../context/CartContext";
import '../App.css';
import Items from './Items'

function Cart() {
  const { cartItems, incrementItem, removeItem } = useCart();

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
              <p>Price: KES {item.Price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => incrementItem(item)}>+1</button>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
