import "../../css/blog.css"
import blogimg from "../../assets/blogimg.png"
import avatar from "../../assets/avatar.png"
import vector from "../../assets/Icon.png"
import Footer from "../../components/footer/Footer"

const Blog = () => {
  return (
    <>
    <div className="internal__wrapper">
        <div className="container">
          <div className="internal__section">
            <div className="internal__info">
              <div className="avatar">
                <div className="name">
                  <img src={avatar} alt="" />
                  <p>Andrew Jonson</p>
                </div>
                <p>Posted on 27th January 2021</p>
              </div>
              <h1>Our internal process and longerm vision</h1>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the</p>
              <button>
                <span>Read More</span>
                <img src={vector} alt="" />
              </button>
            </div>
            <div className="internal__img">
              <img src={blogimg} alt="" />
            </div>
          </div>
        </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Blog