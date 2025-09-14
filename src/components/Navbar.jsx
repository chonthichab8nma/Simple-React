import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../App.css";

//คอมโพเนนต์ Navbar ทำหน้าที่เป็นแถบนำทางหลักของเว็บไซต์
function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
