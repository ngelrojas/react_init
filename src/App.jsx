import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import Home from './pages/home/home.component.jsx'


export const App = () => (
   <div className="main__container">
       <Router>
           <Header /> 

            <Switch>
                <Route exact path="/" component={Home}></Route>
            </Switch>

       </Router>
       
   </div>
)
