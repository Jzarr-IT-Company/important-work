import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return (

        <>
            <nav className='div sticky-top' style={{ backgroundColor: 'black' }}>
                <div className="main-div d-none d-lg-flex">
                    <ul className="nav-links py-3 mt-2">
                        <li>
                            <Link style={{ color: "white", fontSize: "18px" }} onClick={()=>{window.scroll(0, 0)}} to={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link style={{ color: "white", fontSize: "18px" }} onClick={()=>{window.scroll(0, 0)}} to={'/'}>About</Link>
                        </li>
                        <NavDropdown title="Category" style={{ color: "white", fontSize: "18px" }} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <li>
                            <Link style={{ color: "white", fontSize: "18px" }} onClick={()=>{window.scroll(0, 0)}} to={'/'}>FAQS</Link>
                        </li>
                        <li>
                            <Link style={{ color: "white", fontSize: "18px" }} onClick={()=>{window.scroll(0, 0)}} to={'/'}>Contact us</Link>
                        </li>
                        {/* <li className=''>
                            <a href="#" style={{ color: "white", fontSize: "17px" }} className="desktop-item">
                                Furniture
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label style={{ color: "white", fontSize: "18px" }} htmlFor="showMega" className="mobile-item">
                                Furniture
                            </label>
                            <div className="mega-box">
                                <div className="container content px-5" style={{ overflow: "auto" }}>
                                    <div className="row" >
                                        <ul className="mega-links pe-0">
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Sofas</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}> Couches </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Chairs </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Recliners</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Beds </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Mattresses</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}> Storage</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Carrier Deals</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Financing</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Furniture`} style={{ color: "black", fontSize: "14px" }}>Tables</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", fontSize: "17px" }} className="desktop-item">
                                Lighting
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label style={{ color: "white", fontSize: "18px" }} htmlFor="showMega" className="mobile-item">
                                Lighting
                            </label>
                            <div className="mega-box">
                                <div className="container content px-5" style={{ overflow: "auto" }}>

                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Lighting`} style={{ color: "black", fontSize: "14px" }}>Ceiling Lights</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Lighting`} style={{ color: "black", fontSize: "14px" }}>Wall Lights</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Lighting`} style={{ color: "black", fontSize: "14px" }}>Floor Lamps</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Lighting`} style={{ color: "black", fontSize: "14px" }}>Table Lamps</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Lighting`} style={{ color: "black", fontSize: "14px" }}>Outdoor Lighting</Link>
                                            </li>
                                            <li>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row" >
                                        <ul className="mega-links pe-0">
                                        </ul>
                                    </div>
                                    <div className="row">
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", fontSize: "17px" }} className="desktop-item">
                                Decor
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label style={{ color: "white", fontSize: "18px" }} htmlFor="showMega" className="mobile-item">
                                Decor
                            </label>
                            <div className="mega-box">
                                <div className="container content px-5" style={{ overflow: "auto" }}>

                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Rugs</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Carpets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Curtains </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Blinds</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Wall Art</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Mirrors</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Cushions</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Throws</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row" >
                                        <ul className="mega-links pe-0">
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Vases</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Decor`} style={{ color: "black", fontSize: "14px" }}>Plant Pots</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", fontSize: "17px" }} className="desktop-item">
                                Kitchen
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label style={{ color: "white", fontSize: "18px" }} htmlFor="showMega" className="mobile-item">
                                Kitchen
                            </label>
                            <div className="mega-box">
                                <div className="container content px-5" style={{ overflow: "auto" }}>

                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Cabinets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Pantries</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Countertops </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Sinks</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Faucets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Kitchen Islands</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Carts</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Kitchen`} style={{ color: "black", fontSize: "14px" }}>Backsplashes</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row" >
                                        <ul className="mega-links pe-0">

                                        </ul>
                                    </div>
                                    <div className="row">
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="#" style={{ color: "white", fontSize: "17px" }} className="desktop-item">
                                Bathroom
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label style={{ color: "white", fontSize: "18px" }} htmlFor="showMega" className="mobile-item">
                                Bathroom
                            </label>
                            <div className="mega-box">
                                <div className="container content px-5" style={{ overflow: "auto" }}>

                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Vanities</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Cabinets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Showers </Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Bathtubs</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <ul className="mega-links">
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Toilets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Bidets</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Bathroom Sinks</Link>
                                            </li>
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}>Mirrors</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row" >
                                        <ul className="mega-links pe-0">
                                            <li>
                                                <Link to={`/detailpage/Bathroom`} style={{ color: "black", fontSize: "14px" }}> Medicine Cabinets</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                    </div>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar