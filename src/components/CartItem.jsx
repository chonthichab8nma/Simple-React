import React from "react";
import { useCart } from "../context/CartContext";
import "../App.css";
/*
  คอมโพเนนต์ CartItem
  - คอมโพเนนต์นี้ทำหน้าที่แสดงผลสินค้าแต่ละชิ้นที่อยู่ในตะกร้า
  - เหตุผลที่เลือกสร้างเป็นคอมโพเนนต์แยก คือ ช่วยให้สามารถ re-use ได้ หากต้องการแสดงรายการสินค้าในส่วนอื่นของเว็บไซต์ (เช่น หน้าสรุปการสั่งซื้อ)
*/
export default function CartItem({ item }) {
  const { removeFromCart, increment, decrement } = useCart();
  // ดึงฟังก์ชันที่จำเป็นสำหรับการจัดการตะกร้าสินค้าจาก Context API
  // เหตุผลที่ใช้ Context API คือ เพื่อให้คอมโพเนนต์นี้สามารถเข้าถึงสถานะและฟังก์ชันของตะกร้าสินค้าได้โดยตรง

  return (
    <div className="cart-item">

      {/* แสดงรูปสินค้า */}
      <img src={item.image} alt={item.name} className="cart-item-image" />

      {/* รายละเอียดสินค้า */}
      <div className="cart-item-details">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-info">Color: {item.color}</p>
        <p className="cart-item-info">Size: {item.size}</p>
        <p className="cart-item-price">฿{item.price}</p>
      </div>

      {/* ปุ่มควบคุมจำนวนสินค้า */}
      <div className="item-quantity-control">
        <button 
          className="quantity-btn" 
          onClick={() => decrement(item.id, item.color, item.size)}>-</button>
        <span>{item.quantity}</span>

        <button 
          className="quantity-btn" 
          onClick={() => increment(item.id, item.color, item.size)}>+</button>
      </div>
      <button 
      
        className="remove-item-btn" 
        onClick={() => removeFromCart(item.id, item.color, item.size)}>Remove</button>
    </div>
  );
}