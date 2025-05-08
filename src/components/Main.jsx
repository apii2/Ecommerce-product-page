import { useState } from 'react'
import ProductImg1 from '../assets/images/image-product-1.jpg'
import ProductImg2 from '../assets/images/image-product-2.jpg'
import ProductImg3 from '../assets/images/image-product-3.jpg'
import ProductImg4 from '../assets/images/image-product-4.jpg'
import RightContainer from './RightContainer'

export default function Main({productAttri, setIsPopupOpen, setProductAttri}) {
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

  function changeImgSrc(id){
    setImgArr(prev=>prev.map((img)=>(
      {...img, selected: false}
    )))
    setImgArr(prev=>prev.map((img, index)=>(
      index === id? {...img, selected: true} : img
    )))
  }

  return (
    <section className='flex flex-col sm:grid grid-rows-1 grid-cols-2 place-items-center gap-5 md:gap-12 lg:gap-28 lg:px-16 sm:py-12'>
      <div className="sm:space-y-6 w-full h-80 sm:h-auto">
        {imgArr.map((img, index)=>(
          img.selected && <img key={index} src={img.src} alt="Image of shoes" className='sm:rounded-xl w-full h-full object-cover' />
        ))}

        <div className="sm:grid grid-cols-4 gap-6 hidden">
          {imgArr.map((img, index)=>(
            <button key={index} 
              onClick={()=>changeImgSrc(index)}
              className={`img-container relative 
                before:content-[''] before:absolute before:inset-0 before:rounded-xl before:bg-transparent before:pointer-events-none
                hover:before:bg-white/60 ${img.selected && 'before:bg-white/60'}`}>

              <img src={img.src} alt={`${index+1} Product Image`} className={`rounded-xl pointer-events-none ${img.selected && 'ring-2 ring-orange'}`} />
            </button>
          ))}
        </div>
      </div>

      <RightContainer productAttri={productAttri} setIsPopupOpen={setIsPopupOpen} setProductAttri={setProductAttri}/>
    </section>
  )
}