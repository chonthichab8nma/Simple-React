import { createContext, useContext, useState } from "react";

// สร้าง Context สำหรับเก็บข้อมูลตะกร้า
const CartContext = createContext();

// ทำหน้าที่เป็นที่เก็บ state ของตะกร้า และแชร์ให้ component ลูก
export const CartProvider = ({ children }) => {
    // cart = state หลักที่เก็บรายการสินค้า
    // setCart = ฟังก์ชันสำหรับเปลี่ยนค่าของ cart
  const [cart, setCart] = useState([]);

   // ฟังก์ชันเพิ่มสินค้าเข้าตะกร้า
  const addToCart = (item) => {
    setCart(prev => {

      // ตรวจสอบว่าสินค้านี้มีในตะกร้าแล้วหรือยัง
      const exists = prev.find(
        i => i.id === item.id && i.color === item.color && i.size === item.size
      );

      // ถ้ามีอยู่แล้วให้บวกจำนวนเพิ่ม
      if (exists) {
        return prev.map(i =>
          i.id === item.id && i.color === item.color && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      // ถ้ายังไม่มีให้เพิ่มใหม่ พร้อมตั้ง quantity = 1
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // ฟังก์ชันลบสินค้าออกจากตะกร้า
  const removeFromCart = (id, color, size) => {
    setCart(prev => prev.filter(i => !(i.id === id && i.color === color && i.size === size)));
  };

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  const increment = (id, color, size) => {
    setCart(prev => prev.map(i =>
      i.id === id && i.color === color && i.size === size
        ? { ...i, quantity: i.quantity + 1 }
        : i
    ));
  };
  
   // คืนค่า provider ที่แชร์ state และฟังก์ชันทั้งหมดไปให้ children ใช้
  const decrement = (id, color, size) => {
    setCart(prev => prev.map(i =>
      i.id === id && i.color === color && i.size === size
        ? { ...i, quantity: Math.max(1, i.quantity - 1) }
        : i
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
