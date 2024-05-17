import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sahteVeri from './assets/sahteVeri.json'
import ProductDetail from './components/ProductDetail'
import ProductUpdate from './components/ProductUpdate'

function App() {
const [selectedProduct,setSelectedProduct] = useState(null)
const [toBeUpdated, setToBeUpdated] = useState()

const handleClickUpdate = (id) => {
  const updatedproduct = sahteVeri.find((product) => product.id === id);
  setToBeUpdated(updatedproduct);
};

const handleClickDetails = (event) => {
  event.preventDefault();
  const productDetail = sahteVeri.find((product)=> product.id == event.target.id );
  setSelectedProduct(productDetail)
  
}

  return (
    <>
      <div>{sahteVeri.map((item, index)=> 
        <div key={index}>
          <p>Ürün Adı: {item.productName}     Ürün ID: {item.id}</p>
          <button onClick={() => handleClickUpdate(item.id)}>Güncelle</button>

          <button id={item.id} onClick={handleClickDetails}>Detay</button>
        </div>)
      }
      {selectedProduct && <ProductDetail product={selectedProduct}/>}

      {toBeUpdated && <ProductUpdate product={toBeUpdated}/>}
      
      </div>
      {/* toBeUpdated probs olarak yollanacak */}
    </>
  )
}

export default App
