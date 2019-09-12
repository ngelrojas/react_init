import React from 'react'
import './scss/footer.scss'
import { Link } from 'react-router-dom'


const Footer = () => {
    return(
        <footer className="main__container-box footer-main">
            <div className="main__container-footer__box">
                <div className="footer-main__item">
                    <Link to="#"><i className="fa fa-linkedin"></i> </Link>
                </div>
                <div className="footer-main__item">
                    <Link to="#"><i className="fa fa-twitter-square"></i> </Link>
                </div>
                <div className="footer-main__item">
                    <Link to="#"><i className="fa fa-facebook-square"></i> </Link>
                </div>
                <div className="footer-main__item">
                    <Link to="#"><i className="fa fa-github-square"></i> </Link>
                </div>
            </div>
        </footer> 
    )
}

export default Footer

