import Navbar from "../navbar/Navbar"
import NavbarTop from "../navbar/NavbarTop"


const Header = () => {
  return (
    <div className="fixed top-0 w-full z-50">
        <NavbarTop />
        <Navbar />
    </div>
  )
}

export default Header