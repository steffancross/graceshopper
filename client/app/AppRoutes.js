import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import { me } from "./store";
import SingleProduct from "../features/SingleProduct/SingleProduct";
import Products from "../features/allProducts/Products";
import Cart from "../features/cart/Cart";
import Checkout from "../features/Checkoutpage/checkoutpage";
import Confirmation from "../features/Confirmation Page/confirmation";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Products />} />
          <Route to="/home" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products/:id" element={<SingleProduct />} />

          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route to="/home" element={<Products />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/*" element={<Products />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
