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

      {/*
        วนลูปสินค้าแต่ละชิ้นในอาร์เรย์ products
        เหตุผล ใช้ map() เพื่อสร้าง UI ของสินค้าแต่ละชิ้นโดยอัตโนมัติ
      */}
      {products.map(product => {
         /*
          เลือกภาพหลักของสินค้า
          เหตุผล เพราะว่าบางสินค้าอาจมีหลายสีและแต่ละสีมีหลายภาพ
          เลือกภาพแรกของสีแรกเป็นภาพหลักสำหรับการแสดงในหน้ารายการสินค้า
          หากสินค้าไม่มีสี ใช้ product.image แทน
        */
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

            {/*
              ลิงก์ไปหน้ารายละเอียดสินค้า
              เหตุผล เพราะว่าให้ผู้ใช้คลิกเพื่อดูรายละเอียด เช่น สี ไซส์ เพิ่มสินค้าลงตะกร้า
              ใช้ React Router Link เพื่อเปลี่ยนหน้าแบบ client-side โดยไม่รีเฟรชหน้า
            */}
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
