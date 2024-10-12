import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <img src={logo} width={160} alt="" />
                        <div className=" mt-5" >
                            <p>Follow us:</p>
                            <div className="d-flex" style={{gap:"0px 20px"}}>
                            <div className="">
                                <i class="fa-brands fs-5 fa-facebook-f"></i>
                            </div>
                            <div className="">
                                <i class="fa-brands fs-5 fa-instagram"></i>
                            </div>
                            <div className="">
                                <i class="fa-brands fs-5 fa-youtube"></i>
                            </div>
                            <div className="">
                                <i class="fa-brands fs-5 fa-x-twitter"></i>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4 className='fw-bold'>Customer Care</h4>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Pagination</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Terms & Conditions</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Contact</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Accessories</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4 className='fw-bold'>Quick Shop</h4>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>About us</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Privacy & Policy</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Terms & Conditions</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>Product Return</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h4 className='fw-bold'>Contact us</h4>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>+92 000000000</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>main rashid minhas road, karachi, pakistan</Link>
                        </div>
                        <div className="py-2">
                            <Link className='text-decoration-none text-dark '>example@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <p>© Copyright 2021 | PalleyStore By ShopiLaunch.</p>
                </div>
            </div>
        </>
    )
}

export default Footer