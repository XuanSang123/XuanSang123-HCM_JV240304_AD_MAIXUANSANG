import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { priceDot } from "../utils/priceFormat";

export default function ListItems({ listProducts, carts, cartsHandler }) {
  const addToCartHandler = (product) => {
    const existedItem = carts?.find((item) => item.id === product.id);
    if (existedItem) {
      existedItem.quantity++;
      cartsHandler([...carts]);
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      cartsHandler([...carts, newProduct]);
      localStorage.setItem("carts", JSON.stringify([...carts, newProduct]));
    }
  };

  return (
    listProducts?.length > 0 && (
      <ul className="container">
        {listProducts.map((product) => (
          <li key={product.id}>
            <div className="picDiv">
              <img src={product.img} alt="" />
              <p>{product.name}</p>
              <p>{priceDot(product.price)}</p>
              <button onClick={() => addToCartHandler(product)}>
                <ShoppingCartIcon />
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  );
}
