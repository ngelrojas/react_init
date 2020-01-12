import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';


const Header = () => (
    <nav className="nav-wrapper">
        <header className="header">
            <Link to='/' className="header__item">home</Link>
            <Link to='/angel-rojas' className="header__item">about me</Link>
        </header>
        
    </nav>
);

export default Header;
