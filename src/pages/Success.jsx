import React from "react";
import "../App.css";

function Success() {
  // ประกาศฟังก์ชันคอมโพเนนต์ชื่อ Success 
  // ใช้ฟังก์ชันแทน class component เพราะเบาและเข้าใจง่ายสำหรับ UI ที่ไม่มี state
  return (
    <div className="success-container">
      {/* div หลัก ทำหน้าที่เป็น container ครอบทั้งหมด
      ใช้ className "success-container" เพื่อกำหนด layout และการจัดตำแหน่งด้วย CSS */}

      <div className="success-box">

        {/* div ย่อย เป็นกล่องข้อความที่อยู่ตรงกลางหรือโดดเด่น
        ใช้ className "success-box" เพื่อใส่สไตล์ เช่น background shadow padding */}
        <h2 className="success-title">Order Confirmed 🎉</h2>
        <p className="success-message">Thank you for shopping with Puma Shop</p>
      </div>
    </div>
  );
}

export default Success;