import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <nav className="nav-wrapper">
        <header className="header">
            <Link to='/' className="header__item">home</Link>
            <Link to='/contact' className="header__item">contact</Link>
        </header>
        
    </nav>
);

export default Header;
