import RightContainer from './RightContainer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Main({productAttri, setIsCartOpen, setProductAttri, imgArr, setImgArr, setIsLightboxOpen}) {
  function changeImgSrc(id){
    setImgArr(prev=>prev.map((img)=>(
      {...img, selected: false}
    )))
    setImgArr(prev=>prev.map((img, index)=>(
      index === id? {...img, selected: true} : img
    )))
  }

  return (
    <section className='flex flex-col sm:grid grid-cols-2 place-items-center gap-5 md:gap-12 lg:gap-28 lg:px-16 sm:pt-6'>
      <div className="sm:space-y-4 w-full h-80 sm:h-full">
        {imgArr.map((img, index)=>(
          img.selected && <img key={index} src={img.src} alt="Image of shoes" 
            className='rounded-xl sm:w-full sm:h-96 sm:object-cover hidden sm:block cursor-pointer'
            onClick={()=>setIsLightboxOpen(true)} />
        ))}

        <Swiper breakpoints={{ 640: { slidesPerView: 4, spaceBetween: 24 } }} loop={true} slidesPerView={1} modules={[Navigation]} navigation 
          className="sm:!p-0.5 h-full sm:h-auto object-cover">
            {imgArr.map((img, index)=>(
              <SwiperSlide key={index} 
                onClick={()=>changeImgSrc(index)}
                className={`swiper-slide relative 
                  sm:before:content-[''] sm:before:absolute sm:before:inset-0 sm:before:rounded-xl sm:before:bg-transparent sm:before:pointer-events-none
                  sm:hover:before:bg-white/60 cursor-pointer ${img.selected && 'sm:before:bg-white/60'}`}>

                <img src={img.src} alt={`${index+1} Product Image`} className={`sm:rounded-xl pointer-events-none ${img.selected && 'sm:ring-2 sm:ring-orange'}`} />
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev cursor-pointer pointer-events-none ms-1.5 sm:!hidden">
              <svg height="800px" width="800px" className='bg-white p-3 rounded-full fill-very-dark-blue' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" xmlSpace="preserve">
                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                  l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                  C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
              </svg>
            </div>

            <div className="swiper-button-next cursor-pointer pointer-events-none me-1.5 sm:!hidden">
              <svg height="800px" width="800px" className='bg-white p-3 rounded-full fill-very-dark-blue rotate-180' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 330 330" xmlSpace="preserve">
                <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                  l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                  C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
              </svg>
            </div>
        </Swiper>
      </div>

      <RightContainer productAttri={productAttri} setIsCartOpen={setIsCartOpen} setProductAttri={setProductAttri}/>
    </section>
  )
}