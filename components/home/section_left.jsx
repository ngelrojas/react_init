import React from 'react'
import { Link } from 'react-router-dom'


const SectionLeft = () => {
    return(
         <div className="section__left">
            <div className="section__left--content">
                <ul className="section__left-lang">
                    <li className="section__left-item">
                        <Link to="#">Portugues</Link>
                    </li>
                    
                    <li className="section__left-item lang__active">
                        <Link to="#">English</Link>
                    </li>

                    <li className="section__left-item">
                        <Link to="#">Spanish</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SectionLeft

