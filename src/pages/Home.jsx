import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import "../App.css";

/*
  คอมโพเนนต์ Home
  - ทำหน้าที่เป็นหน้าหลักของเว็บไซต์ (Homepage)
  - แสดงผลแบนเนอร์ต้อนรับและรายการสินค้าแนะนำ
*/

function Home() {

  // เลือก 3 สินค้าตัวแรกมาแสดงเป็น Featured Products
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to Puma Shop</h1>
      </div>

      <h2>Featured Products</h2>

       {/* แสดงสินค้าส่วนแนะนำทั้งหมด */}
      <div className="featured-products">
        {featuredProducts.map(product => {
          // เลือกรูปหลักของสินค้า
          // ถ้า colors[0].image เป็น array → เลือกภาพแรก
          // ถ้าไม่ใช่ array ให้ใช้ภาพเดียว
          const image = Array.isArray(product.colors[0].image)
            ? product.colors[0].image[0]
            : product.colors[0].image;

          return (
            <div key={product.id} className="product-card">
              <img src={image} alt={product.name} className="img" />
              <h3>{product.name}</h3>
              <p>{product.price} THB</p>
              <Link to={`/products/${product.id}`} className="view-btn">
                View
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
