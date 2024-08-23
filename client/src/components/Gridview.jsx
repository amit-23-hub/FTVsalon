import React from 'react';
import BeautyProducts from './beautyproducts';
import ProductDetails from './productdetail';
import './Gridview.css';

function Gridview() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [products, setProducts] = React.useState([]); // Make sure to initialize products

  React.useEffect(() => {
    // Example of fetching products; replace with your data fetching logic
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <BeautyProducts 
        products={products} 
        viewType="grid" // Or 'list' depending on your preference
        onProductClick={setSelectedProduct} 
      />
      {selectedProduct && (
        <ProductDetails 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default Gridview;
