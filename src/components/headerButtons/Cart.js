import React from "react";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"

function Cart() {
  const cartLength = useSelector((state) => state.cart.list.length)
  return (
    <NavLink to="/cart" className="btn btn-outline-secondary ms-xl-2 float-end ps-1 buttons fw-semibold">
      <span className="fa fa-shopping-cart me-1"></span>Cart ({cartLength})
    </NavLink>
  );
}

export default Cart;
