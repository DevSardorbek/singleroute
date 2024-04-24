import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../../css/prodact.css";
import blogimg from "../../assets/blogimg.png";
import avatar from "../../assets/avatar.png";
import vector from "../../assets/Icon.png";
import axios from "../../api/index";
import star from "../../assets/star.png";
import Footer from "../../components/footer/Footer";
import Loading from "../../components/loading/Loading";

const Prodact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("/products")
      .then((res) => {
        setData(res.data.products)
        setLoading(false); 
    })
      .catch((err) => {
        console.log(err)
        setLoading(false); 
    });
  }, []);
  if(loading) {
    return <Loading/>; 
}
 
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
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the
              </p>
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

      <div className="prodact_section" data-aos="fade-up">
        <div className="container">
          <div className="prodact__title">
            <h1>All Products</h1>
          </div>
          <div className="prodact__cards">
            {data.map((product) => (
              <div key={product.id} className="prodact__card" data-aos="fade-up">
                <div className="card_img">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt="" />
                  </Link>
                </div>
                <div className="card_info">
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="rating">
                    <img src={star} alt="" />
                    <span>({product.rating})</span>
                  </div>
                  <div className="price">
                    <h3>${product.price}</h3>
                    <del>${product.price + 100}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prodact;
