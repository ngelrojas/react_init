import React from 'react'
import { Link } from 'react-router-dom'


const LangMobile = () =>{
    return(
        <div className="lang-mobile">
            <details>
                <summary><i className="fa fa-language"></i></summary>
                <ul>
                    <li>
                        <Link to="#">PORTUGUES</Link>
                    </li>
                    <li>
                        <Link to="#">SPANISH</Link>
                    </li>
                    <li>
                        <Link to="#">ENGLISH</Link>
                    </li>
                </ul>
            </details>
        </div>
    )
}

export default LangMobile

