import React from "react";

import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import './Cart.css';

function Cart(props) {
    const cartItems = useSelector((state) => state.cart.items);
    const showParagraph = useSelector(state => state.cart.show);

    return (
    <React.Fragment>
      <div className="cart-container">
       <div onClick={props.onClose} className="wrapper-cart"></div>
       <div className="cart-box">
        <p>Your items</p>
        {!showParagraph && <p>Your cart is empty</p>}
        <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              price: item.price,
              quantity: item.quantity,
              total: item.totalPrice
            }}
          />
        ))}
        </ul>
        <button className="button" onClick={props.onClose}>Close cart</button>
       </div> 
      </div>
    </React.Fragment>
  );
}

export default Cart;
