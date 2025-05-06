import Header from "./components/Header"
import CartPopup from "./components/CartPopup"
import { useEffect, useRef, useState } from "react"

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <main className="px-40">
      <Header setIsPopupOpen={setIsPopupOpen}/>
      <hr className="text-grayish-blue"/>
      {isPopupOpen && <CartPopup setIsPopupOpen={setIsPopupOpen}/>}
    </main>
  )
}
