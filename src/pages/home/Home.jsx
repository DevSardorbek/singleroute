import React from 'react'
import "../../css/home.css"
import prosimg1 from "../../assets/prosbrand.svg"
import prosimg2 from "../../assets/prosbrand2.svg"
import prosimg3 from "../../assets/prosbrand3.svg"
import prosImg from "../../assets/prosImg.png"
import f_img1 from "../../assets/prosYellow1.png"
import f_img2 from "../../assets/prosYellow2.png"
import Latest from '../../components/latest/Latest'
import Footer from '../../components/footer/Footer'


const Home = () => {
  return (
   <div className='prosper__wrapper'>
      <div className='container'>
        <div className='prosper__section'>
          <div className='prosper__info'>
            <h1>Prosper with our bespoke solutions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
            <div className='btn_services'>
              <button className='btn1'>See our services</button>
              <button className='btn2'>See All Services </button>
            </div>
            <span>Worked with 100+ Companies</span>
            <div className='pros__brand'>
              <img src={prosimg1} alt="" />
              <img src={prosimg2} alt="" />
              <img src={prosimg3} alt="" />
            </div>
          </div>
          <div className='prosper__img'>
            <img src={prosImg} alt="" />
            <div className='y_img1'>
              <img src= {f_img1} alt="" />
            </div>
            <div className='y_img2'>
              <img src= {f_img2} alt="" />
            </div>
          </div>
        </div>
        <Latest/>
      </div>
        <Footer/>
   </div>
  )
}

export default Home