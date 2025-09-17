import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Checkout() {
  // ดึง cart และฟังก์ชัน setCart จาก context
  const { cart, setCart } = useCart();
  // สร้าง navigate สำหรับเปลี่ยนหน้า
  const navigate = useNavigate();

  // สร้าง state สำหรับฟอร์ม
  const [name, setName] = useState("");  // เก็บชื่อผู้สั่งซื้อ
  const [address, setAddress] = useState(""); // เก็บที่อยู่ผู้สั่งซื้อ
  
  // ฟังก์ชันเมื่อกดปุ่ม Confirm Order
  const handleConfirm = () => {
    // ตรวจสอบว่ากรอกชื่อและที่อยู่ครบหรือไม่
    if (!name || !address) {
      alert("Please fill in your name and address");
      return;
    }
    // ถ้ากรอกครบ
    alert("Order confirmed!");
    setCart([]);
    navigate("/success");
  };

  // ถ้าไม่มีสินค้าในตะกร้า
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