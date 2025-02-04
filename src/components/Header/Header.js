import React from 'react';
import './Header.scss';
import { Link, useLocation } from "react-router-dom";

const Header = () =>{
    const location = useLocation();
    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/work', name: 'Work' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' }
    ];

    return(
        <header className="header">
            <div className="logo">
                <img src="path_to_logo.png" alt="My Logo" />
            </div>
            <nav className="nav">
                {navItems.map(item => (
                    <Link 
                        key={item.path} 
                        to={item.path} 
                        className={location.pathname === item.path ? 'active' : ''}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;