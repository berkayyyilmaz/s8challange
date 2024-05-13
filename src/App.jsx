import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sahteVeri from './assets/sahteVeri.json'
import ProductDetail from './components/ProductDetail'

function App() {
const [selectedProduct,setSelectedProduct] = useState(null)
const [toBeUpdated, setToBeUpdated] = useState()

const handleClickUpdate = (event) => {
  event.preventDefault();
  const updatedproduct = sahteVeri.find((product)=> product.id == event.target.id );
  setToBeUpdated(updatedproduct)
  
}
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
          <button id={item.id} onClick={handleClickUpdate}>Güncelle</button>
          <button id={item.id} onClick={handleClickDetails}>Detay</button>
        </div>)
      }
      {selectedProduct && <ProductDetail product={selectedProduct}/>}</div>
      {/* toBeUpdated probs olarak yollanacak */}
    </>
  )
}

export default App
