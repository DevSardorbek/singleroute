import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api';
import "../../css/singleroute.css"
import { BiSolidShoppingBag } from "react-icons/bi";
import Loading from "../../components/loading/Loading";



const SingleRoute = () => {
    const { id } = useParams();
    const [prodact, setProdact] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/product/${id}`)
            .then(res => {
                setProdact(res.data);
                setLoading(false); 
            })
            .catch(err => {
                console.log(err);
                setLoading(false); 
            });
    }, [id]); 
    if(loading) {
        return <Loading/>; 
    }
    return (
        <div className='single_route'>
            <div className="container">
                <div className="single_card">
                    <img src={prodact?.images && prodact.images[0]} alt="" />     
                    <div className="mini_img">
                    <img src={prodact?.images && prodact.images[1]} alt="" />     
                    <img src={prodact?.images && prodact.images[2]} alt="" />     
                    <img src={prodact?.images && prodact.images[3]} alt="" />     
                    </div>
                    <div className="single_card_info">
                        <h1>{prodact?.category}</h1>
                        <h2>{prodact?.title}</h2>
                        <p>{prodact?.description}</p>
                        <div className="buy">
                        <span>${prodact?.price}</span>
                        <button>
                        <BiSolidShoppingBag />
                        </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default SingleRoute;