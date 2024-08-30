import React from 'react';
import PropTypes from 'prop-types';

const BeautyProduct = ({ product }) => (
  <div className="beauty-product">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </div>
);

BeautyProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeautyProduct;