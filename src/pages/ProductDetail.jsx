import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../App.css";

/*
  คอมโพเนนต์ ProductDetail
  - ทำหน้าที่แสดงหน้ารายละเอียดของสินค้าแต่ละชิ้น
  - มีการแสดงภาพสินค้า, ตัวเลือกสีและไซส์, และปุ่มสำหรับเพิ่มสินค้าลงในตะกร้า
*/

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <h2>Product not found</h2>;

  const hasColors = product.colors && product.colors.length > 0;
  const [selectedColor, setSelectedColor] = useState(
    hasColors ? product.colors[0] : { name: "", image: [product.image] }
  );
  const [mainImage, setMainImage] = useState(selectedColor.image[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor.name,
      size: selectedSize,
      image: mainImage,
      quantity: 1
    });
    alert("Added to cart!");
  };

  return (
  <div className="center-container">
    <div className="product-detail-container">
      <img src={mainImage} alt={product.name} className="product-image" />

      <h2 className="product-name">{product.name}</h2>
      <h3 className="product-price">{product.price} THB</h3>

      {hasColors && (
        <div style={{ marginTop: "20px" }}>
          <h4 className="product-label">Colors:</h4>
          {product.colors.map(c => (
            <button
              key={c.name}
              className={`color-btn ${c.name === selectedColor.name ? "selected" : ""}`}
              onClick={() => {
                setSelectedColor(c);
                setMainImage(c.image[0]);
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      )}

      {selectedColor.image.length > 1 && (
        <div style={{ marginTop: "10px" }}>
          {selectedColor.image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${selectedColor.name}-${idx}`}
              width="60"
              className={img === mainImage ? "selected-image" : "small-image"}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      )}

      {product.sizes && (
        <div style={{ marginTop: "20px" }}>
          <h4 className="product-label">Sizes:</h4>
          {product.sizes.map(s => (
            <button
              key={s}
              className={`size-btn ${s === selectedSize ? "selected" : ""}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  </div>
);

}

export default ProductDetail;
