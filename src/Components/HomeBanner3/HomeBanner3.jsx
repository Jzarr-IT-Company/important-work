import React from 'react'
import img1 from '../../assets/dummyProductsImages/img1.webp'
import imgz from '../../assets/dummyProductsImages/img2.webp'
import img3 from '../../assets/dummyProductsImages/img3.webp'
import img4 from '../../assets/dummyProductsImages/img4.webp'
import { useNavigate } from 'react-router-dom'
function HomeBanner3() {
    const navigate = useNavigate()
    const handle = ()=>{
        navigate('/products')
        window.scroll(0,0)
    }
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <h5>Trending</h5>
                </div>
                <div className="row" style={{ gap: "30px 0px" }}>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle} style={{ cursor: "pointer" }}>
                        <div className="position-relative">
                            <img src={img1} className="img-fluid rounded-2" alt="" />
                            <div
                                className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                                style={{
                                    fontSize: "12px",
                                    borderRadius: "0 0 0 10px",
                                    zIndex: "1",
                                    transform: "translate(10%, -10%)",
                                }}
                            >
                                Save 30%
                            </div>
                            <div className="text-center my-3">
                                <h5 style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}>
                                    <del>$100.00</del> $75.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle} style={{ cursor: "pointer" }}>
                        <div className="">
                            <img src={img1} className='img-fluid rounded-2' alt="" />
                            <div className="text-center my-3">
                                <h5 className='' style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}><del>$100.00</del> $75.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle}>
                        <div className="">
                            <img src={img1} className='img-fluid rounded-2' alt="" />
                            <div className="text-center my-3">
                                <h5 className='' style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}><del>$100.00</del> $75.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle} style={{ cursor: "pointer" }}>
                        <div className="position-relative">
                            <img src={img1} className="img-fluid rounded-2" alt="" />
                            <div
                                className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                                style={{
                                    fontSize: "12px",
                                    borderRadius: "0 0 0 10px",
                                    zIndex: "1",
                                    transform: "translate(10%, -10%)",
                                }}
                            >
                                Save 30%
                            </div>
                            <div className="text-center my-3">
                                <h5 style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}>
                                    <del>$100.00</del> $75.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle}>
                        <div className="">
                            <img src={img1} className='img-fluid rounded-2' alt="" />
                            <div className="text-center my-3">
                                <h5 className='' style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}><del>$100.00</del> $75.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle} style={{ cursor: "pointer" }}>
                        <div className="position-relative">
                            <img src={img1} className="img-fluid rounded-2" alt="" />
                            <div
                                className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                                style={{
                                    fontSize: "12px",
                                    borderRadius: "0 0 0 10px",
                                    zIndex: "1",
                                    transform: "translate(10%, -10%)",
                                }}
                            >
                                Save 30%
                            </div>
                            <div className="text-center my-3">
                                <h5 style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}>
                                    <del>$100.00</del> $75.00
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle}>
                        <div className="">
                            <img src={img1} className='img-fluid rounded-2' alt="" />
                            <div className="text-center my-3">
                                <h5 className='' style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}><del>$100.00</del> $75.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6" onClick={handle} style={{ cursor: "pointer" }}>
                        <div className="position-relative">
                            <img src={img1} className="img-fluid rounded-2" alt="" />
                            <div
                                className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1"
                                style={{
                                    fontSize: "12px",
                                    borderRadius: "0 0 0 10px",
                                    zIndex: "1",
                                    transform: "translate(10%, -10%)",
                                }}
                            >
                                Save 30%
                            </div>
                            <div className="text-center my-3">
                                <h5 style={{ fontSize: "15px" }}>Tile Pro Bluetooth Tracker</h5>
                                <p style={{ fontSize: "14px" }}>
                                    <del>$100.00</del> $75.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner3