import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleConfirm = () => {
    if (!name || !address) {
      alert("Please fill in your name and address");
      return;
    }
    alert("Order confirmed!");
    setCart([]);
    navigate("/success");
  };

  if (cart.length === 0) return <h2 style={{ textAlign: "center", padding: "50px" }}>Your cart is empty</h2>;

  return (
    <div className="checkout-container">
      <div className="checkout-box">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
          </div>
        </div>

        <h3 className="checkout-total">Total: ฿{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>

        <button onClick={handleConfirm} className="confirm-btn">
          Confirm Order
        </button>
      </div>
    </div>
  );
}