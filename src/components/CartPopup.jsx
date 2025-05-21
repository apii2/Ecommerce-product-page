import { useEffect, useRef } from "react"
import Thumbnail from '../assets/images/image-product-1-thumbnail.jpg'

export default function CartPopup(props){
  const popupRef = useRef(null)

  function useOutsideAlerter(ref){
    useEffect(()=>{
      function handleClickOutside(event){
        if(ref.current && !ref.current.contains(event.target) && event.target !== document.querySelector('.btn-cart')){
          props.setIsCartOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    },[ref])
  }

  useOutsideAlerter(popupRef)

  function totalPrice(){
    let sum = props.productAttri.quantity * 125
    return sum.toFixed(2)
  }

  function removeProduct(){
    props.setProductAttri(prev=>({...prev, selected: false, quantity: 0}))
  }

  function handleClick(){
    props.setProductAttri(prev=>({...prev, selected: false, quantity: 0}))
    props.setIsCartOpen(false)
  }

  return (
    <section ref={popupRef} className="z-20 absolute right-0 w-[92%] -translate-x-4 sm:-translate-x-6 lg:-translate-x-20 translate-y-3 sm:-translate-y-5 sm:w-80 h-45 rounded-lg bg-white shadow-xl">
      <h3 className="px-5 py-3 font-semibold text-very-dark-blue">Cart</h3>
      <hr className="h-[2px] bg-grayish-blue/30 text-grayish-blue/30 border-0"/>
      <div className={`px-5 py-3 text-dark-grayish-blue font-semibold text-sm ${!props.productAttri.selected && 'flex items-center justify-center h-32'}`}>
        {!props.productAttri.selected && <p className="">The cart is empty</p>}

        {props.productAttri.selected && <>
          <div className="flex items-center justify-between">
            <img src={Thumbnail} alt="Product thumbnail image" className="w-12 rounded-md"/>

            <div className="text-dark-grayish-blue/80 font-medium capitalize">
              Fall Limited edition sneakers
              <p className="lowercase">$125.00 x {props.productAttri.quantity} <span className="text-very-dark-blue font-bold">${totalPrice()}</span></p>
            </div>

            <button onClick={removeProduct} 
              className="cursor-pointer fill-[#C3CAD9] hover:fill-very-dark-blue">
              <svg viewBox="0 0 14 16" className="w-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                  <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                </defs><use fillRule="nonzero" xlinkHref="#a"/>
              </svg>
            </button>
          </div>

          <button onClick={handleClick} 
            className="w-full bg-orange hover:bg-orange/60 text-sm font-semibold text-very-dark-blue py-2.5 rounded-md mt-3.5">
            Checkout
          </button>
        </>}
      </div>
    </section>
  )
}