import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

/*
  หน้า Cart
  - คอมโพเนนต์นี้ทำหน้าที่แสดงรายการสินค้าทั้งหมดที่อยู่ในตะกร้า
  - มีการคำนวณราคารวมทั้งหมด และมีปุ่มสำหรับไปยังหน้า Checkout
*/

function Cart() {

  // ดึง state cart จาก context
  const { cart } = useCart();

  // ถ้าไม่มีสินค้าในตะกร้า
  if (cart.length === 0) return <h2>Your cart is empty</h2>;

  // คำนวณราคารวมทั้งหมด โดยเอา price * quantity มาบวกกัน
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      {/* ชื่อหน้า */}
      <h2>Your Cart</h2>

      {/* แสดงรายการสินค้าแต่ละชิ้นด้วย CartItem ใช้ key unique เป็น combination ของ id, color, size */ }
      {cart.map(item => <CartItem key={`${item.id}-${item.color}-${item.size}`} item={item} />)}

      {/* แสดงราคารวม */}
      <h3>Total: ฿{total}</h3>
      <Link to="/checkout">Go to Checkout</Link>
    </div>
  );
}

export default Cart;
