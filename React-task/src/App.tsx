import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const productData = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "T-Shirt", category: "Clothing", price: 25 },
  { name: "Smartphone", category: "Electronics", price: 800 },
  { name: "Jeans", category: "Clothing", price: 50 },
  { name: "Apple", category: "Food", price: 2 },
  { name: "Bread", category: "Food", price: 3 },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? productData
      : productData.filter((product) => product.category === activeFilter);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div>
      <ProductList
        products={filteredProducts}
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
    </div>
  );
}

export default App;
