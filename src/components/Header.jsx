import Logo from '../assets/images/logo.svg'
import Cart from '../assets/images/icon-cart.svg'
import Avatar from '../assets/images/image-avatar.png'

export default function Header(props){
  return (
    <header className='flex justify-between'>
      <div className="flex items-center gap-16">
        <img src={Logo} alt="logo" className='w-38'/>
        <nav className=''>
          <ul className='flex items-center gap-8 text-dark-grayish-blue font-semibold'>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Collections</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Men</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Women</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>About</li>
            <li className='border-b-3 border-b-white hover:border-b-orange hover:text-very-dark-blue py-10'>Contact</li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-end gap-10">
        <button onClick={()=>props.setIsPopupOpen(prev=>!prev)} className='btn-cart cursor-pointer'>
          <img src={Cart} alt="Cart icon" className='w-5 h-5'/>
        </button>
        <img src={Avatar} alt="Avatar icon" className='w-12 h-12 rounded-full hover:ring-2 hover:ring-orange'/>
      </div>
    </header>
  )
}