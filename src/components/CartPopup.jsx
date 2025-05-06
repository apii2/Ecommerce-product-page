import { useEffect, useRef, useState } from "react"

export default function CartPopup(props){
  const popupRef = useRef(null)

  function useOutsideAlerter(ref){
    useEffect(()=>{
      function handleClickOutside(event){
        if(ref.current && !ref.current.contains(event.target) && event.target !== document.querySelector('.btn-cart img')){
          props.setIsPopupOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    },[ref])
  }

  useOutsideAlerter(popupRef)

  return (
    <section ref={popupRef} className="fixed right-0 -translate-x-20 -translate-y-3 w-80 h-40 rounded-lg bg-white shadow-xl">
      <h3>Cart</h3>
      <hr />
      <div className="">
        The cart is empty
      </div>
    </section>
  )
}