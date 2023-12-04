import React from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartvalue = useSelector((state) => state.cartReducer.cartValues.length);
  const pricee = useSelector((state) => state.cartReducer.totalPrice);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-inline p-2 navbar-nav mx-auto">
          <span className="btn btn-primary"> cart items: {cartvalue}</span>{" "}
          &nbsp
          <span className="btn btn-primary"> cart total: {pricee}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
