import "../../css/navbar.css"
import { Link , NavLink } from 'react-router-dom'
import logo from "../../assets/Logo.svg"


const Navbar = () => {
  return (
    <div className='navbar__wrapper'>
        <div className='container'>
            <div className='navbar__section'>
                <div className='navbar__logo'>
                    <Link to={"/"}><img src={logo} alt="" /></Link>
                </div>
                <div className='navbar__links'>
                    <NavLink to={"/About"}>About Us</NavLink>
                    <NavLink to={"/Careers"}>Careers</NavLink>
                    <NavLink to={"/Services"}>Services</NavLink>
                    <NavLink to={"/Blog"}>Blog</NavLink>
                    <NavLink to={"/Contact"}>Contact Us</NavLink>
                    <button>Clone project</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar