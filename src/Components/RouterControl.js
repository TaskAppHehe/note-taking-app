import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"

import PublicHomePage from "./PublicHomePage"
import LogIn from "./Login"
import DashBoard from "./DashBoard"
import UserContext from "./UserContext"
export default function HomePage(props){
    var [currentUser] = useContext(UserContext)

    return(
        <Router>
                <nav>
                    <ul> {/* tried to remove this  */}
                        <li><Link to = "/">Home</Link></li>
                        <li><Link to = "/dashboard">Dashboard</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path = "/dashboard">
                        { currentUser ? <DashBoard/> : <Redirect to = "/"/> }
                    </Route>
                    <Route path = "/">
                        { currentUser ? <Redirect to = "/dashboard" /> : <PublicHomePage/>}
                    </Route>
                </Switch>
        </Router>
        
    )
}