export default function RightContainer({productAttri, setIsPopupOpen, setProductAttri}){

  function increQuantity(){
    setProductAttri(prev=>({...prev, quantity: prev.quantity+1}))
  }
  function decreQuantity(){
    productAttri.quantity > 1 && setProductAttri(prev=>({...prev, quantity: prev.quantity-1}))
  }

  function handleClick(){
    if(productAttri.quantity > 0){
      setProductAttri(prev=>({...prev, selected: true}))
      setIsPopupOpen(true)
    }
  }

  return (
    <div className="">
      <p className='font-semibold text-dark-grayish-blue uppercase text-xs mb-3'>Sneaker company</p>
      <h1 className='font-bold text-very-dark-blue capitalize text-4xl mb-6'>Fall limited edition sneakers</h1>
      <p className='text-sm text-dark-grayish-blue/80 font-medium mb-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <p className='text-very-dark-blue text-xl font-bold inline-block me-3 mb-1.5'>$125.00</p>
      <button className='px-2 py-1 bg-very-dark-blue font-semibold rounded-md text-white text-xs'>50%</button>
      <p className='text-sm font-semibold text-dark-grayish-blue line-through mb-6'>$250.00</p>

      <div className="grid grid-cols-[35%_auto] gap-3">
        <div className="flex bg-light-grayish-blue rounded-md px-3">
          <button className='cursor-pointer fill-[#FF7E1B] hover:fill-[#FF7E1B]/60'
            onClick={decreQuantity}>
            <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/>
              </defs><use fillRule="nonzero" xlinkHref="#a"/>
            </svg>
          </button>

          <input type='text' disabled value={productAttri.quantity} className='w-full text-center text-sm text-very-dark-blue font-semibold' />

          <button className='cursor-pointer fill-[#FF7E1B] hover:fill-[#FF7E1B]/60'
            onClick={increQuantity}>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/>
              </defs><use fillRule="nonzero" xlinkHref="#b"/>
            </svg>
          </button>
        </div>

        <button onClick={handleClick}
          className='text-sm font-semibold text-very-dark-blue bg-orange hover:bg-orange/60 
          cursor-pointer w-full rounded-md py-2.5 flex items-center justify-center gap-3'>
          <svg viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" className='w-3.5 h-3.5'>
            <path fill='#1d2025' d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  )
}