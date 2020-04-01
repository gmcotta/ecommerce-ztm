import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity }}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Product"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{price}</span>
      <span className="price">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
}

export default CheckoutItem;