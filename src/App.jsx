import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // TODO: Define initial product data
  const sampleProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true }
  ];

  // TODO: Implement state to manage filtering
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  // TODO: Implement logic to filter products based on availability
  const filterProducts = (inStock) => {
    const filtered = sampleProducts.filter(product => product.inStock === inStock);
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => filterProducts(true)}>In Stock</button>
      <button onClick={() => filterProducts(false)}>Out of Stock</button>
      

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={filterProducts} />
    </div>
  );
};

export default App;   //export default App;
