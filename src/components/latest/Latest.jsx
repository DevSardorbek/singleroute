import "../../css/latest.css"
import cardImg1 from "../../assets/latestimg1.png"
import cardImg2 from "../../assets/latestimg2.png"
import cardImg3 from "../../assets/latestimg3.png"
import icon from "../../assets/Icon.png"
const card = [
    {
        id:1,
        img: cardImg1, 
        title: "Why you have to digitalize in 2021",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
        btn:"Learn More"
    },
    {
        id:2,
        img: cardImg2, 
        title: "Our internal process and longerm vision",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
        btn:"Learn More"
    },
    {
        id:3,
        img: cardImg3, 
        title: "Helping the next generation of leaders",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
        btn:"Learn More"
    },
]

const Latest = () => {
    let data = card?.map((el)=>(
        <div key={el.id} className='latest_card'>
        <img src={el.img} alt="" />
        <div className='latest__card-info'>
            <h3>{el.title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.</p>
            <button>
                <p>{el.btn}</p>
                <img src={icon} alt="" />
            </button>
        </div>
    </div>
    ))
  return (
    <div className='latest__wrapper'>
        <div className='container'>
            <div className='latest__title'>
                <h1>Latest Blog & News</h1>
            </div>
            <div className='latest__section'>
             {data}
            </div>
        </div>
    </div>
  )
}

export default Latest