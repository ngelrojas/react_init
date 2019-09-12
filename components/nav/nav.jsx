import React from 'react'
import { Link } from 'react-router-dom'
import './scss/nav.scss'
import logoAR from './images/logo_ar.png'
import NavMobile from './nav_mobile/nav_mobile.jsx'


const Nav = () => {
    return(
        <div className="header__nav">
            <nav className="header__nav-menu">
                <ul className="header__nav-menu__content">
                    <li className="menu__content-item">
                        <Link to="/" >HOME</Link>
                    </li>
                    <li className="menu__content-item">
        
            <details className="menu__content-item__dropdown">
                <summary>TUTORIALS <i className="fa fa-angle-down"></i> </summary>
                <ul className="submenu">
                    <li>
                        <Link to="categories/python">python 1</Link>
                    </li>
                    <li>
                        <Link to="categories/python">python 2</Link>
                    </li>
                    <li>
                        <Link to="categories/python">python 3</Link>
                    </li>
                </ul>
            </details>
        
                    </li>
                    <li className="menu__content-item">
                        <Link to="/about-me" ><img src={logoAR} alt="https://ngelrojasp.com" /></Link>
                    </li>
                    <li className="menu__content-item">
                        <Link to="/blog" >BLOG</Link>
                    </li>
                    <li className="menu__content-item">
                        <Link to="/contact-me" >CONTACTS</Link>
                    </li>
                </ul>
            </nav>
            <NavMobile />
        </div>
    )
}

export default Nav

