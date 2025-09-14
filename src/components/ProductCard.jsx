import React from "react";
import { Link } from "react-router-dom";

/*
  คอมโพเนนต์ ProductCard
  - ทำหน้าที่แสดงผลการ์ดสินค้าแต่ละชิ้น
  - เหตุผลที่สร้างเป็นคอมโพเนนต์แยก คือ ทำให้สามารถนำการ์ดสินค้านี้ไปใช้ซ้ำในหน้าอื่นได้ เช่น หน้า Home
*/

export default function ProductCard({ product }) {
  const image = product.colors
    ? Array.isArray(product.colors[0].image)
      ? product.colors[0].image[0]
      : product.colors[0].image
    : product.image;

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <img src={image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>฿{product.price}</p>
      <Link to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
