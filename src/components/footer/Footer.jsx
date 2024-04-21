import React from 'react'
import "../../css/footer.css"
import { Link } from 'react-router-dom'
import Flogo from "../../assets/footerLogo.svg"
import facebook from "../../assets/facebook/social-icon/Vector.png"
import insta from "../../assets/insta/social-icon/instagram.png"
import youtube from "../../assets/youtobe/social-icon/youtube.png"
import twitter from "../../assets/twitter/social-icon/Vector.png"
import dec1 from "../../assets/f_dec1.png"
import dec2 from "../../assets/f_dec2.png"

const Footer = () => {
  return (
    <footer>
        <div className='dec1'>
            <img src={dec1} alt="" />
        </div> 
        <div className='dec2'>
            <img src={dec2} alt="" />
        </div>

        <div className='container'>
            <div className='footer__section'>
                <div className='footer_logo'>
                    <Link to={"/"}>
                        <img src={Flogo} alt="" />
                    </Link>
                    <h2>Bespoke software solutions</h2>
                    <div className='f_media'>
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />
                        <img src={insta} alt="" />
                        <img src={twitter} alt="" />
                    </div>
                </div>
                <div className='footer__company'>
                    <h3>Company</h3>
                    <Link to={"/About"}>About Us</Link>
                    <Link to={"/Careers"}>Careers</Link>
                    <Link to={"/Services"}>Services</Link>
                    <Link to={"/Blog"}>Blog</Link>
                </div>
                <div className='footer__connect'>
                    <h3>Connect</h3>
                    <p>hi@finsweet.com</p>
                    <p>+(123) 456-7890</p>
                </div>  
                <div className='footer__join'>
                    <h3>Join Newsletter</h3>
                    <form action="">
                        <input type="email" placeholder='Type email here' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className='footer__bottom'>
                <h3>© All rights reserved – Finsweet</h3>
                <div className='privacy'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer