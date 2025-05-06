import { useEffect, useRef } from "react"

export default function CartPopup(props){
  const popupRef = useRef(null)

  function useOutsideAlerter(ref){
    useEffect(()=>{
      function handleClickOutside(event){
        if(ref.current && !ref.current.contains(event.target) && event.target !== document.querySelector('.btn-cart svg')){
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
    <section ref={popupRef} className="fixed right-0 -translate-x-20 -translate-y-5 w-80 h-40 rounded-lg bg-white shadow-xl">
      <h3 className="px-5 py-3">Cart</h3>
      <hr className="h-[2px] bg-grayish-blue/30 text-grayish-blue/30 border-0"/>
      <div className="px-5 py-3">
        The cart is empty
      </div>
    </section>
  )
}