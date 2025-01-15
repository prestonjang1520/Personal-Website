import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
            <nav className="main-nav">
                <img className="logo" src="1" />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;