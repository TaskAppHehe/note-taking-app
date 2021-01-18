import React, {useState} from 'react';

import RouterControl from "./RouterControl.js"
import UserContext from "./UserContext"

export default function Main(props){
    var [loggedIn, setLoggedIn] = useState(false);
    return(
        <UserContext.Provider value = {[loggedIn, setLoggedIn]}>
            <RouterControl/>
        </UserContext.Provider>
    )
}