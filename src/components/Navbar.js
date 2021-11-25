import React from 'react'
import mylogo from "../logo.png"
import { FaBars } from 'react-icons/fa';

// React fornt awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
//import { faBars } from 'react-fontawesome'





const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container">
                <a className="navbar-brand" href="#"><img src={mylogo} className="logo" alt="image logo" alt=""  height="100" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FaBars  color='#fff' />
                    {/* <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">How work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">protfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
