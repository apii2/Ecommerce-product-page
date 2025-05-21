import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function LightboxPopup({imgArr, setImgArr, setIsLightboxOpen}) {
  const handleSlideChange = (swiper) => {
    const newSelectedIndex = swiper.realIndex;

    setImgArr(prevArr =>
      prevArr.map((img, i) => ({
        ...img,
        selected: i === newSelectedIndex,
      }))
    );
  };

  return (
    <section className="lightbox-container absolute top-0 left-0 w-dvw h-dvh bg-black/70 z-10 hidden md:flex items-center justify-center"
      onClick={()=>setIsLightboxOpen(false)}>

      <div className='px-5' onClick={e=>e.stopPropagation()}>
        <svg width="14" height="15" viewBox='0 0 14 15' xmlns="http://www.w3.org/2000/svg" 
          onClick={()=>setIsLightboxOpen(false)}
          className="w-5 h-5 fill-white hover:fill-orange ms-auto mb-4">
          <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd"/>
        </svg>

        <div className="relative">
          <Swiper loop={true} slidesPerView={1} modules={[Navigation]} navigation onSlideChange={handleSlideChange}
            className="w-[47vw] lg:w-[33vw]">
            {imgArr.map((img, index)=>(
              <SwiperSlide key={index} 
                className={'swiper-slide'}>

                <img src={img.src} alt={`${index+1} Product Image`} className={'rounded-xl'} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev cursor-pointer pointer-events-none">
            <svg height="800px" width="800px" className='bg-white p-3 rounded-full fill-very-dark-blue' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
            </svg>
          </div>

          <div className="swiper-button-next cursor-pointer pointer-events-none">
            <svg height="800px" width="800px" className='bg-white p-3 rounded-full fill-very-dark-blue rotate-180' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 330 330" xmlSpace="preserve">
              <path id="XMLID_92_" d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001
                l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996
                C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"/>
            </svg>
          </div>
        </div>


        <div className="flex h-18 justify-between mx-8 mt-6">
          {imgArr.map((img,index)=>(
            <div key={index} className={`relative before:content-[''] before:absolute before:inset-0 before:rounded-lg before:bg-transparent before:pointer-events-none
              ${img.selected && 'before:bg-white/60'}`}>
              <img src={img.src} alt='Image of shoes' className={`h-full rounded-lg pointer-events-none ${img.selected && 'ring-2 ring-orange'}`}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
