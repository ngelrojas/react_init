import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Nav from '../components/nav/nav.jsx'
import Home from '../components/home/home.jsx'
import Footer from '../components/footer/footer.jsx'


export const App = () => (
   <div className="main__container">
       <Router>
           <header className="main__container-box header-main">
               <Nav />
           </header>

            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>

            <Footer /> 
       </Router>
       
   </div>
)
