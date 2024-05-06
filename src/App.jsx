import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./App.scss";
import ListItems from "./components/ListItems";
import listProducts from "./data/data.json";
import { useState } from "react";
import Cart from "./components/Cart";

const App = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [carts, setCarts] = useState(
    JSON.parse(localStorage.getItem("carts")) || []
  );

  const cartsHandler = (carts) => {
    setCarts(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
  };

  const handleToggle = () => {
    setIsToggled((preState) => !preState);
  };

  return (
    <div>
      {isToggled && <Cart carts={carts} cartsHandler={cartsHandler} />}
      <div className="header">
        <div>
          <span>Trang chủ:</span> <span>Danh sách sản phẩm</span>
        </div>
        <div>
          <button className="sparkle u-hover--sparkle" onClick={handleToggle}>
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
      <h1>Danh sách sản phẩm</h1>
      <ListItems
        listProducts={listProducts}
        carts={carts}
        cartsHandler={cartsHandler}
      />
    </div>
  );
};

export default App;
