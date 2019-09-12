import React from 'react'
import { Link } from 'react-router-dom'
import LangMobile from './lang_mobile.jsx'
import logoAR from '../images/logo_ar.png'


const NavMobile = () => {
    return(
        <nav className="header__nav-menu-mobile">
            <details className="details_main">
                <summary><img src={logoAR} alt="ngelrojasp.com" /></summary>
                <ul className="nav__menu-mobile">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <details className="details_submain">
                            <summary>TUTORIALS <i className="fa fa-angle-down"></i> </summary>
                            <ul>
                                <li>
                                    <Link to="/">python 1</Link>
                                </li>
                                <li>
                                    <Link to="/">python 2</Link>
                                </li>
                                <li>
                                    <Link to="/">python 3</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link to="/">LOGO</Link>
                    </li>
                    <li>
                        <Link to="/">BLOG</Link>
                    </li>
                    <li>
                        <Link to="/">CONTACTS</Link>
                    </li>
                </ul>
            </details>
            <LangMobile /> 
        </nav> 
    )
}

export default NavMobile

