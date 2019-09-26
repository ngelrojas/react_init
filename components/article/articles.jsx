import React from 'react'
import { Link } from 'react-router-dom'
import './scss/article.scss'


const DEFAULT_IMAGE = 'https://picsum.photos/300/300/?blur=2'
const DEFAULT_TITLE = 'titl this article'
const DEFAULT_EXCERPT = 'to request multiple images of the same size in your browser, and the random query para to prevent the images from being cached'
const DEFAULT_LINK = '/thi-title-article'


export const Article = ({ cover = DEFAULT_IMAGE, title = DEFAULT_TITLE, excerpt = DEFAULT_EXCERPT, path = DEFAULT_LINK }) => {
    return(
        <article>
            
            <div className="content__article">
                <div className="content__article--side">
                    <figure>

                        <Link to={path}>
                            <img src={cover} alt="ngelroajsp.com" />
                        </Link>
                        
                    </figure>        
                </div>

                <div className="content__article--content">
                    <div className="content__article--head">
                        <Link to={path}>
                            <h2>{ title }</h2>
                        </Link>
                        
                    </div>
                    <p>{ excerpt }</p>
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


