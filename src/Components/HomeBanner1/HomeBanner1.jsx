import React from 'react'
import img from '../../assets/banner1.webp'
import { Link, useNavigate } from 'react-router-dom'
import './HomeBanner1.css'

function HomeBanner1() {

    const navigate = useNavigate();
    const handle = async () => {
        navigate('/category')
        window.scroll(0, 0)
    }
    return (
        <>
            <div className="container ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2 className='display-5 fw-bold'>Gear Up Your Phone, Elevate Your Style!</h2>
                        <p className='text-secondary my-4'>Discover the latest mobile accessories that boost your phone's  <br /> performance  and enhance your style. Shop now for premium   <br />phone cases, chargers, and more!</p>
                        <button class="button" onClick={handle}>Shop Now</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner1