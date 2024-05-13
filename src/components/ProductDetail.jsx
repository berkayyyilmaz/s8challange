import SizeSelect from "./SizeSelect";
import PriceDisplay from './PriceDisplay';
import { useState } from 'react'
export default function ProductDetail(props) {
    const {product} = props
    const [productPrice, setProductPrice] = useState(0);
    function handlePriceChange(e) {
       
        let {name, value} = e.target
        const x = product.productSizePriceArray.find(
            (item)=>{if (item.productSize == value) {
                return item;
            }})
        setProductPrice(x.productPrice);
    }
    return (
      <div>
    <SizeSelect onChange= {handlePriceChange} 
      product={product}/>

    <PriceDisplay price={productPrice}/>
    </div>
    );
  }