import React from "react";
import { Link } from "react-router-dom";

/*
  คอมโพเนนต์ ProductCard
  - ทำหน้าที่แสดงผลการ์ดสินค้าแต่ละชิ้น
  - เหตุผลที่สร้างเป็นคอมโพเนนต์แยก คือ ทำให้สามารถนำการ์ดสินค้านี้ไปใช้ซ้ำในหน้าอื่นได้ เช่น หน้า Home
*/

export default function ProductCard({ product }) {
  // เลือกรูปที่จะใช้แสดงในการ์ด
  const image = product.colors // ถ้ามี property colors (แสดงว่าสินค้ามีหลายสี)
    ? Array.isArray(product.colors[0].image) // ตรวจว่าภาพของสีแรกเป็น array ไหม
      ? product.colors[0].image[0] // ถ้าเป็น array ให้ใช้รูปแรก [0]
      : product.colors[0].image // ถ้าไม่ใช่ array ให้ใช้รูปตรงๆ
    : product.image; // ถ้าไม่มี colors ให้ใช้ product.image

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      {/* แสดงรูปสินค้า */}
      <img src={image} alt={product.name} width="150" />
       {/* ชื่อสินค้า */}
      <h3>{product.name}</h3>
       {/* ราคา */}
      <p>฿{product.price}</p>
      {/* ปุ่มลิงก์ไปยังหน้ารายละเอียดสินค้า โดยใช้ id ของสินค้านั้น */}
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
