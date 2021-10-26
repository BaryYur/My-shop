import React, { useState } from "react";

import Product from "./Product";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "First Book",
    description: "Some first text...",
    price: 12.99
  },
  {
    id: "p2",
    title: "Second Book",
    description: "Some second text...",
    price: 10.50
  },
  {
    id: "p3",
    title: "Third Book",
    description: "Some third text...",
    price: 14.55
  },
  {
    id: "p4",
    title: "Fourth Book",
    description: "Some fourth text...",
    price: 11.55
  }
];

function Products() {
  const [items, setItems] = useState(DUMMY_DATA);

  return (
    <main className={classes.main}>
      {items.map((product) => (
        <Product
          id={product.id}
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
    </main>
  );
}

export default Products;