import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index <= 300; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
  // 1️⃣ Fetch all products
  fetch("https://ecom-backend-oecv.onrender.com/allproducts")
    .then((response) => response.json())
    .then((data) => setAll_Product(data))
    .catch((err) => console.error("Error fetching products:", err));

  // 2️⃣ Fetch cart if logged in
  if (localStorage.getItem("auth-token")) {
    fetch("https://ecom-backend-oecv.onrender.com/getcart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Cart data from backend:", data);
        // Ensure IDs are numbers
        const normalizedCart = {};
        for (const key in data) {
          normalizedCart[Number(key)] = data[key];
        }
        setCartItems(normalizedCart);
      })
      .catch((error) =>
        console.error("Error fetching cart data:", error)
      );
  }
}, []);



  const addToCart = (itemId) => {
    const numericId = Number(itemId); // ensure number

    setCartItems((prev) => ({
      ...prev,
      [numericId]: (prev[numericId] || 0) + 1,
    }));

    if (localStorage.getItem("auth-token")) {
      fetch("https://ecom-backend-oecv.onrender.com/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: numericId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Add to cart response:", data))
        .catch((error) =>
          console.error("Error adding to cart:", error)
        );
    }
  };



  const removeFromCart = (itemId) => {
  const numericId = Number(itemId);
  setCartItems((prev) => ({
    ...prev,
    [numericId]: Math.max((prev[numericId] || 1) - 1, 0),
  }));

  if (localStorage.getItem("auth-token")) {
    fetch("https://ecom-backend-oecv.onrender.com/removefromcart", { // new endpoint
      method: "POST",
      headers: {
        Accept: "application/json",
        "auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ itemId: numericId }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Remove from cart response:", data))
      .catch((error) =>
        console.error("Error removing from cart:", error)
      );
  }
};


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
