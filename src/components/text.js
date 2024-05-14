let productDataFrame = {
              id: 1,
              productName: '',
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
            };


productDataFrame = {...productDataFrame,id:2,productName:'Hala'}
productDataFrame = {...productDataFrame,id:3,productName:'Amca'}
productDataFrame = {...productDataFrame,productSizePriceArray:[{productPrice:200,productSize:21}]}
productDataFrame = {...productDataFrame,productSizePriceArray:[...productDataFrame.productSizePriceArray,{productPrice:10,productSize:5}]}

console.log(productDataFrame);