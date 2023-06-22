import React from 'react';

const Product = ({ productData }) => {
  return (
    <div>
      {productData.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.productimage} alt={product.product_name} />
          <h3>{product.product_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
