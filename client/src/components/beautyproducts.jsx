import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import BeautyProduct from './beautyproduct';
import ProductDetails from './productdetail';
import './beautyproducts.css';

const BeautyProducts = ({ products = [], viewType = 'list', onProductClick }) => {
  // Return early if no products are provided
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  const handleProductClick = (product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  const getView = () => {
    if (viewType === 'list') {
      return (
        <List>
          {products.map((product) => (
            <ListItem 
              key={product.id} 
              button 
              onClick={() => handleProductClick(product)}
            >
              <BeautyProduct product={product} />
              <ListItemText primary={product.name} secondary={`${product.price}`} />
              <ProductDetails product={product} />
            </ListItem>
          ))}
        </List>
      );
    } else {
      return (
        <div className="product-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-item" 
              onClick={() => handleProductClick(product)}
            >
              <BeautyProduct product={product} />
              <ListItemText primary={product.name} secondary={`${product.price}`} />
              <ProductDetails product={product} />
            </div>
          ))}
        </div>
      );
    }
  };

  return <div>{getView()}</div>;
};

BeautyProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  })),
  viewType: PropTypes.oneOf(['list', 'grid']),
  onProductClick: PropTypes.func,
};

export default BeautyProducts;
