import React, { Fragment, useState, useEffect } from 'react'
import{ Article } from '../article/articles.jsx'


function useArticleData(){
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        window.fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(response => {
                setArticles(response) 
            })
    }, [])

    return { articles, loading}
}

export const ListofArticles = () => {
   const {articles, loading} = useArticleData()

   const renderList = () => (
        <section>
            {
               loading ? articles.map(article => <Article key={article.id} />) : <h1>Loading...!</h1> 
            }
             
        </section>
   )

   return (
        <Fragment>
            { renderList() } 
        </Fragment>
   )
}
