import React from 'react'
import img1 from '../../assets/dummyProductsImages/collection-v1-img1.jpg'
import img2 from '../../assets/dummyProductsImages/collection-v1-img2.jpg'
import img3 from '../../assets/dummyProductsImages/collection-v1-img3.jpg'
import img4 from '../../assets/dummyProductsImages/iwatch2.webp'
import { Link } from 'react-router-dom'
import HoverCard from '../Practice/Practice'
import './HomeBanner2.css'

function HomeBanner2() {
    return (
        <>
            <div className="container py-5">
                <div className=" d-flex justify-content-between align-items-center">
                    <h4 className='mb-4'>TOP CATEGORIES</h4>
                    <Link className='btn btn-dark'>
                        SHOP MORE
                    </Link>
                </div>
                <div className="row py-5" style={{gap:"20px 0px"}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card py-5" style={{ backgroundImage: `url(${img1})`, border: "none" }}>
                            <div className="overlay">
                                Overlay Text
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card py-5" style={{ backgroundImage: `url(${img2})`, border: "none" }}>
                            <div className="overlay">
                                Overlay Text
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card py-5" style={{ backgroundImage: `url(${img3})`, border: "none" }}>
                            <div className="overlay">
                                Overlay Text
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner2