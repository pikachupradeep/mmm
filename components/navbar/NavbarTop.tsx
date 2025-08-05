
import ImageCarousel2 from '../../components/ImageCarousel'
import './navbarTop.css'
import NavCarousel from './NavCarousel'

const NavbarTop = () => {
  return (
    <div style={{backgroundColor: '#1447E6'}} className='h-[3rem] flex items-center gap-4 text-white'>
       <NavCarousel />
      
    </div>
  )
}

export default NavbarTop