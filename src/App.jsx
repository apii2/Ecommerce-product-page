import Header from "./components/Header"
import CartPopup from "./components/CartPopup"
import Main from "./components/Main"
import LightboxPopup from './components/LightboxPopup'
import { useState } from "react"
import ProductImg1 from './assets/images/image-product-1.jpg'
import ProductImg2 from './assets/images/image-product-2.jpg'
import ProductImg3 from './assets/images/image-product-3.jpg'
import ProductImg4 from './assets/images/image-product-4.jpg'

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [productAttri, setProductAttri] = useState({ selected: false, quantity: 0 })

  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const [imgArr, setImgArr] = useState([
    {
      src: ProductImg1,
      selected: true
    },
    {
      src: ProductImg2,
      selected: false
    },
    {
      src: ProductImg3,
      selected: false
    },
    {
      src: ProductImg4,
      selected: false
    }
  ])

  return (
    <main className="sm:px-5 md:px-10 lg:px-20 xl:px-40 relative">
      <Header setIsCartOpen={setIsCartOpen} productAttri={productAttri}/>
      <hr className="text-grayish-blue/60 h-[2px] border-0 bg-grayish-blue/60"/>
      {isCartOpen && <CartPopup setIsCartOpen={setIsCartOpen} productAttri={productAttri} setProductAttri={setProductAttri}/>}

      <Main productAttri={productAttri} setIsCartOpen={setIsCartOpen} setProductAttri={setProductAttri} 
        imgArr={imgArr} setImgArr={setImgArr} setIsLightboxOpen={setIsLightboxOpen}/>
        
      {isLightboxOpen && <LightboxPopup imgArr={imgArr} setImgArr={setImgArr} setIsLightboxOpen={setIsLightboxOpen}/>}
    </main>
  )
}
