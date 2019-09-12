import React from 'react'
import './scss/home.scss'
import Art from '../article/articles.jsx'
import SectionLeft from './section_left.jsx'
import SectionRight from './section_right.jsx'


const Home = () => {
    return(
        <main>
            <SectionLeft /> 
            <section>
                <Art />
                <Art />
                <Art />
                <Art />
            </section>
            <SectionRight /> 
        </main>
    )
} 

export default Home
