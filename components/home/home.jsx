import React from 'react'
import './scss/home.scss'
import { ListofArticles } from '../listofarticles/listofarticles.jsx'
import SectionLeft from './section_left.jsx'
import SectionRight from './section_right.jsx'




const Home = () => {
    return(
        <main>
            <SectionLeft /> 
                <ListofArticles /> 
            <SectionRight /> 
        </main>
    )
} 

export default Home
