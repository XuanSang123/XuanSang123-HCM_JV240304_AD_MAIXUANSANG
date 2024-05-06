import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { priceDot } from "../utils/priceFormat";

const Cart = ({ carts, cartsHandler }) => {
  const totalPrice = () => {
    let total = 0;
    carts.forEach((item) => {
      total += item.price * item.quantity;
    });
    return priceDot(total);
  };

  const quantityHandler = (productId, isIncrease) => {
    const products = carts.find((item) => item.id === productId);
    if (isIncrease) {
      products.quantity++;
      cartsHandler([...carts]);
    } else {
      products.quantity--;
      cartsHandler([...carts]);
      if (products.quantity === 0) {
        handleDelete(productId);
      }
    }
  };

  const handleDelete = (id) => {
    const deletedItem = carts.filter((item) => item.id !== id);
    cartsHandler([...deletedItem]);
  };

  const renderCart = () => {
    return carts?.length > 0 ? (
      carts?.map((item) => (
        <div className="cart" key={item.id}>
          <img className="img" src={item.img} alt="" />
          <span>{item.name}</span>
          <button
            className="btn"
            onClick={() => quantityHandler(item.id, false)}
            disabled={!item.quantity}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="btn"
            onClick={() => quantityHandler(item.id, true)}
          >
            +
          </button>
          <DeleteIcon
            className="DeleteIcon"
            onClick={() => handleDelete(item.id)}
          />
        </div>
      ))
    ) : (
      <h2>Chưa có sản phẩm trong giỏ hàng</h2>
    );
  };

  return (
    <div className="fixed background">
      <span className="header-span">Cart</span>
      <hr />
      <div className="shopping">{renderCart()}</div>
      <hr />
      <span className="header-2span">Tổng tiền: {totalPrice()}</span>
    </div>
  );
};

export default Cart;
