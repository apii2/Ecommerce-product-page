import Header from "./components/Header"
import CartPopup from "./components/CartPopup"
import Main from "./components/Main"
import { useState } from "react"

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <main className="px-40">
      <Header setIsPopupOpen={setIsPopupOpen}/>
      <hr className="text-grayish-blue/60 h-[2px] border-0 bg-grayish-blue/60"/>
      {isPopupOpen && <CartPopup setIsPopupOpen={setIsPopupOpen}/>}

      <Main />
    </main>
  )
}
