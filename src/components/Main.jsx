import ProductImg1 from '../assets/images/image-product-1.jpg'
import ProductImg2 from '../assets/images/image-product-2.jpg'
import ProductImg3 from '../assets/images/image-product-3.jpg'
import ProductImg4 from '../assets/images/image-product-4.jpg'
import RightContainer from './RightContainer'

export default function Main({productAttri, setIsPopupOpen, setProductAttri}) {
  return (
    <section className='grid grid-cols-2 place-items-center gap-28 px-16 py-12'>
      <div className="space-y-6">
        <img src={ProductImg1} alt="Image of shoes" className='rounded-xl' />
        <div className="grid grid-cols-4 gap-6">
          <img src={ProductImg1} alt="" className='rounded-xl' />
          <img src={ProductImg2} alt="" className='rounded-xl' />
          <img src={ProductImg3} alt="" className='rounded-xl' />
          <img src={ProductImg4} alt="" className='rounded-xl' />
        </div>
      </div>

      <RightContainer productAttri={productAttri} setIsPopupOpen={setIsPopupOpen} setProductAttri={setProductAttri}/>
    </section>
  )
}