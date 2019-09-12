import React from 'react'
import { Link } from 'react-router-dom'
import './scss/article.scss'


const Article = () => {
    return(
        <article>
            
            <div className="content__article">
                <div className="content__article--side">
                    <figure>

                        <Link to="/">
                            <img src="https://picsum.photos/300/300/?blur=2" alt="ngelroajsp.com" />
                        </Link>
                        
                    </figure>        
                </div>

                <div className="content__article--content">
                    <div className="content__article--head">
                        <Link to="/">
                            <h2>title this article its fun...!</h2>
                        </Link>
                        
                    </div>
                    <p>To request multiple images of the same size in your browser, add the random query param to prevent the images from being cached</p>
                    <div className="content__article--footer">
                        <div className="footer__share content__footer--item">
                            <Link to="#"><i className="fa fa-share-alt"></i> </Link>
                        </div>
                        <div className="footer__like content__footer--item">
                            <Link to="#"><i className="fa fa-heart"></i> </Link>
                        </div>
                        <div className="footer__readmore content__footer--item">
                            <Link to="#"><i className="fa fa-arrow-circle-right"></i> </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </article>
    )
}

export default Article

