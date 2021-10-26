import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import Cart from './Cart/Cart';
import './Header.css';

function Header(props) {
  const dispatch = useDispatch();
  const showCounter = useSelector(state => state.cart.show);
  const [showCart, setShowCart] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  if(cartQuantity > 0) {
    dispatch(cartActions.visible());
  } else {
    dispatch(cartActions.invisible());
  };

  return ( 
    <React.Fragment>
        {showCart &&
          <Cart onClose={() => setShowCart(false)} />
        }
      <header>
        <h1>React App</h1>
        <button type="button" onClick={() => setShowCart(a => !a)} className="button-cart">
          <span>Cart</span>
          {showCounter && <span className="b-circle">{cartQuantity}</span>}
        </button>
      </header>
    </React.Fragment>
  );
}

export default Header;