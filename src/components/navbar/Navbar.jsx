import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo.svg";
import "../../css/navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar__wrapper'>
      <div className='container'>
        <div className='navbar__section'>
          <div className='navbar__logo'>
            <Link to={"/"}><img src={logo} alt="" /></Link>
          </div>
          <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
            <NavLink to={"/About"}>About Us</NavLink>
            <NavLink to={"/Careers"}>Careers</NavLink>
            <NavLink to={"/Services"}>Services</NavLink>
            <NavLink to={"/Blog"}>Blog</NavLink>
            <NavLink to={"/Contact"}>Contact Us</NavLink>
            <NavLink to={"/prodacts"}>Products</NavLink>
            <button>Clone project</button>
          </div>
          <div className="burger" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
