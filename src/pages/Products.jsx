import React from "react";
import products from "../data/products";
import { Link } from "react-router-dom";
import "../App.css";

/*
  คอมโพเนนต์ Products
  - ทำหน้าที่แสดงรายการสินค้าทั้งหมด
  - โดยการวนลูปข้อมูลสินค้าจากไฟล์ products.js และสร้างการ์ดสินค้า
*/

function Products() {
  return (
    <div className="products-container">
      {products.map(product => {
        const image = product.colors
          ? Array.isArray(product.colors[0].image)
            ? product.colors[0].image[0]
            : product.colors[0].image
          : product.image;

        return (
          <div key={product.id} className="product-card">
            <img src={image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} THB</p>
            <Link to={`/products/${product.id}`} className="view-btn">
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
