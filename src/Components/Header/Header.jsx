import React from 'react'
import logo from '../../assets/logo.png';
import ShowAddToCard from '../ShowAddToCard/ShowAddToCard';
import LoginComponent from '../LoginComponent/LoginComponent';


function Header() {
    return (

        <>
            <nav className="navbar bg-white px-5">
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={logo} width={130} alt="" />
                    </a>
                    <div className="d-flex align-items-center" style={{ gap: "0px 0px " }} >
                        <div className="" >
                            
                        </div>
                        <LoginComponent/>
                        <ShowAddToCard/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header