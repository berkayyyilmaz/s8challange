import React from 'react';

function ProductUpdate({ product }) {
  return (
    <div>
      <label>
        Ürün Adı: 
        <input type="text" value={product.productName} readOnly />
      </label>
      {product.productSizePriceArray.map((item) => (
        <div key={item.id}>
          <label>
            Boyut: 
            <input type="text" value={item.productSize} readOnly />
          </label>
          <label>
            Fiyat: 
            <input type="text" value={item.productPrice} readOnly />
          </label>
        </div>
      ))}
    </div>
  );
}

export default ProductUpdate;

