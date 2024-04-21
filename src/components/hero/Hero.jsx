import React from 'react'
import "../../css/hero.css"
import yellow from "../../assets/yellowhero.png"

const Hero = (props) => {
  return (
    <div className='hero__wrapper'>
        <div className='container'>
            <div className='hero__section'>
                <div className='hero__section-info'>
                    <h1>{props.heroInfo.title}</h1>
                    <p>{props.heroInfo.desc}</p>
                    <button>{props.heroInfo.btn}</button>
                </div>
                <div className='hero__section-img'>
                    <div className='yellowimg'>
                        <img  src={yellow} alt="" />
                    </div>
                    <img src={props.heroInfo.img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero