import sericesHero from "../../assets/heroServices.png"
import Hero from '../../components/hero/Hero'
import Latest from '../../components/latest/Latest'
import Footer from '../../components/footer/Footer'
 

const heroInfo = {
  title: "We serve clients with ground breaking solutions",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
  img: sericesHero,
  btn:"Work With Us"
}

const Contact = () => {
  return (
    <>
      <Hero heroInfo = {heroInfo}/>
      <Latest/>
      <Footer/> 
    </>
  )
}

export default Contact