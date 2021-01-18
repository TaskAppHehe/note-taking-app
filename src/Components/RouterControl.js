import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

import Login from './Login';
import DashBoard from "./DashBoard"
import UserContext from "./UserContext"
export default function HomePage(props){
    var [loggedIn, useLoggedIn] = useContext(UserContext)
    return(
        <Router>
                <nav>
                    <ul> {/* tried to remove this  */}
                        <li><Link to = "/">Home, login for now</Link></li>
                        <li><Link to = "/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/dashboard">
                        { loggedIn ? <DashBoard/> : <Redirect to = "/"/> }
                    </Route>
                    <Route path = "/">
                        { loggedIn ? <Redirect to = "/dashboard" /> : <Login/>}
                    </Route>
                </Switch>
        </Router>
        
    )
}