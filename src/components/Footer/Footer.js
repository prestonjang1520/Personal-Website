import React from 'react';
import './Footer.scss';

const Footer = () => {
    return(
        <footer className="footer-container">
            <p>&copy; {new Date().getFullYear()} Preston Jang. All rights reserved.</p>
            <p>Built with ❤️ using React</p>
        </footer>
    );
    
}
export default Footer;