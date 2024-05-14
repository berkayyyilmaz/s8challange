// Sorumlu kişiler : Doğan & Volkan

import { useState } from 'react';


const initialFormData = [
  {
    id: 1,
    productName: 'spor ayakkabısı',
    productSizePriceArray: [
      {
        id: 1,
        productPrice: 100,
        productSize: 37,
      },
      {
        id: 2,
        productPrice: 120,
        productSize: 34,
      },
    ],
  },
  {
    id: 2,
    productName: 'klasik ayakkabısı',
    productSizePriceArray: [
      {
        id: 1,
        productPrice: 100,
        productSize: 37,
      },
      {
        id: 2,
        productPrice: 120,
        productSize: 34,
      },
    ],
  },
  {
    id: 3,
    productName: 'bot',
    productSizePriceArray: [
      {
        id: 1,
        productPrice: 100,
        productSize: 37,
      },
      {
        id: 2,
        productPrice: 120,
        productSize: 34,
      },
    ],
  },
];

const productDataFrame = {
  id: null,
  productName: '',
  productSizePriceArray: [],
};

const productSizeAndPrice = {
  id: '',
  productPrice: null,
  productSize: null,
};
function Product() {
  const [productData, setProductData] = useState(productDataFrame);
  const [sizeAndPrice, setSizeAndPrice] = useState(productSizeAndPrice);
  const [add, setAdd] = useState(null);
  const [productId, setProductID] = useState(1);
  const [sizeAndPriceId, setSizeAndPriceId] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    if (event.target.name === 'name') {
      setProductData({
        ...productData,
        productName: event.target.value,
        id: productId,
      });
    } else if (event.target.name === 'size') {
      setSizeAndPrice({ ...sizeAndPrice, productSize: event.target.value });
    } else if (event.target.name === 'price') {
      setSizeAndPrice({ ...sizeAndPrice, productPrice: event.target.value });
    }
  }

  function addNew(event) {
    event.preventDefault();
    if (event.target.name.name === 'name') {
      setAdd(true);
      setProductData({
        ...productData,
        productName: event.target.name.value,
        id: productId,
      });
      setProductID(productId + 1);
    } else if (
      event.target[0].name === 'size' ||
      event.target[1].name === 'price'
    ) {
      setProductData({
        ...productData,
        productSizePriceArray: [
          ...productData.productSizePriceArray,
          {
            id: sizeAndPriceId,
            productPrice: event.target[1].value,
            productSize: event.target[0].value,
          },
        ],
      });
      setSizeAndPriceId(sizeAndPriceId + 1);
    }
  }

  function sendData() {
    return;
  }

  return (
    <div>
      <form onSubmit={addNew}>
        <label>
          Product Name:{' '}
          <input
            type="text"
            name="name"
            value={productData.productName}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Product Name</button>
      </form>

      {add && add ? (
        <>
          <p>{productData.productName} eklendi,aşağıda size ve price ekle</p>
          <form onSubmit={addNew}>
            <label>
              Size:{' '}
              <input
                type="text"
                name="size"
                value={sizeAndPrice.productSize}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:{' '}
              <input
                type="text"
                name="price"
                value={sizeAndPrice.productPrice}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Add Product</button>
          </form>
          {productData.productSizePriceArray &&
            productData.productSizePriceArray.map((each, id) => {
              return (
                <>
                  <p>{`ID: ${each.id}, PRICE:${each.productPrice},SİZE:${each.productSize}`}</p>
                </>
              );
            })}
          <button type="button" onClick={sendData}>
            ADD ALL
          </button>
        </>
      ) : null}
    </div>
  );
}

export default Product;
