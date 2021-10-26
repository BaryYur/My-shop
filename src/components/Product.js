import React from "react";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import classes from './Product.module.css';

function Product(props) {
  const dispatch = useDispatch();
  const { title, price, id, description } = props;
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  };

  return (
  <div>
    <div className={classes['item-container']}>
      <div className={classes['item__header']}>
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div>${price}</div>
      </div>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  </div>);
}

export default Product;