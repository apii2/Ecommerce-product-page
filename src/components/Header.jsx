import Logo from '../assets/images/logo.svg'
import Avatar from '../assets/images/image-avatar.png'

export default function Header(props){
  return (
    <header className='flex justify-between'>
      <div className="flex items-center gap-16">
        <img src={Logo} alt="logo" className='w-38'/>
        <nav className=''>
          <ul className='flex items-center gap-8 text-dark-grayish-blue font-medium cursor-pointer'>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Collections</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Men</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Women</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>About</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end gap-10">
        <button onClick={()=>props.setIsPopupOpen(prev=>!prev)} className='btn-cart cursor-pointer fill-[#69707D] hover:fill-very-dark-blue'>
          <svg viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" className='w-5 h-5'>
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" />
          </svg>
        </button>
        <img src={Avatar} alt="Avatar icon" className='w-12 h-12 rounded-full hover:ring-2 hover:ring-orange cursor-pointer'/>
      </div>
    </header>
  )
}