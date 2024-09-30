import { useState } from "react";

interface Product {
  name: string;
  category: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

function ProductList({
  products,
  onFilterChange,
  activeFilter,
}: ProductListProps) {
  return (
    <div className="product-list-container">
      <div className="filter-buttons">
        <button
          onClick={() => onFilterChange("All")}
          className={`filter-button ${activeFilter === "All" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => onFilterChange("Electronics")}
          className={`filter-button ${
            activeFilter === "Electronics" ? "active" : ""
          }`}
        >
          Electronics
        </button>
        <button
          onClick={() => onFilterChange("Clothing")}
          className={`filter-button ${
            activeFilter === "Clothing" ? "active" : ""
          }`}
        >
          Clothing
        </button>
        <button
          onClick={() => onFilterChange("Food")}
          className={`filter-button ${activeFilter === "Food" ? "active" : ""}`}
        >
          Food
        </button>
      </div>
      <ul className="product-list">
        {products.length === 0 ? (
          <li className="no-products">No products available</li>
        ) : (
          products.map((product, index) => (
            <li key={index} className="product-item">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-price">Price: ${product.price}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ProductList;
