import React from "react";
import { useCart } from "../context/CartContext";
import '../App.css';

function Cart() {
  // Destructure clearCart from useCart
  const { cartItems, incrementItem, decrementItem, removeItem, clearCart } = useCart();

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.Price * item.quantity), 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Price: KES {item.Price}</p>
                <p>Quantity: {item.quantity}</p>
                {/* Calculate individual item total here */}
                <p>Total: KES {(item.Price * item.quantity).toFixed(2)}</p>
                <button onClick={() => incrementItem(item)} disabled={item.quantity >= item.Stock}>+1</button>
                <button onClick={() => decrementItem(item)}>-1</button>
                <button onClick={() => removeItem(item)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Cart Total: KES {cartTotal.toFixed(2)}</h3>
          <button onClick={clearCart} className="clear-cart">Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;