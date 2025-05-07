import Header from "./components/Header"
import CartPopup from "./components/CartPopup"
import Main from "./components/Main"
import { useState } from "react"

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const [productAttri, setProductAttri] = useState({ selected: false, quantity: 0 })

  return (
    <main className="px-40 relative">
      <Header setIsPopupOpen={setIsPopupOpen} productAttri={productAttri}/>
      <hr className="text-grayish-blue/60 h-[2px] border-0 bg-grayish-blue/60"/>
      {isPopupOpen && <CartPopup setIsPopupOpen={setIsPopupOpen} productAttri={productAttri} setProductAttri={setProductAttri}/>}

      <Main productAttri={productAttri} setIsPopupOpen={setIsPopupOpen} setProductAttri={setProductAttri}/>
    </main>
  )
}
