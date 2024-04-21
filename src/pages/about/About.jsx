// import React from 'react'
import Hero from '../../components/hero/Hero'
import Latest from '../../components/latest/Latest'
import Footer from "../../components/footer/Footer"
import "../../css/about.css"
import abouthero from "../../assets/hero-img.png"

const heroInfo = {
  title: "We value human, organizational, and operational intelligence, not just artificial",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
  img: abouthero,
  btn:"Work With Us"
}
const card = [
  {
    id:1,
    title:"Awards received",
    num: "15+",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et."
  },
  {
    id:2,
    title:"Clients served",
    num: "500+",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et."
  },
  {
    id:3,
    title:"Employees",
    num: "34",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et."
  },
  {
    id:4,
    title:"Custom solutions",
    num: "130+",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et."
  }
]

const About = () => {
  let data = card?.map((el) =>(
    <div key={el.id} className='about__card'>
      <h1>{el.num}</h1>
      <h3>{el.title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.</p>
  </div>
  ))
  return (
  <>
    <Hero heroInfo = {heroInfo}/>
    <div className='about__energy-wrapper'>
        <div className='container'>
          <div className='about__energy-section'>
            <h1>The energy of a start-up combined with 30 years of experience</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>
          <div className='about__energy-cards'>
             {data}
          </div>
        </div>
    </div>
    <Latest/>
    <Footer/>
  </> 
  )
}

export default About