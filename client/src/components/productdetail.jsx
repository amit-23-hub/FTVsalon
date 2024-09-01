import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product }) => (
  <div className="product-details">
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </div>
);

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductDetails;