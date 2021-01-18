import React, {useState} from 'react';

import RouterControl from "./RouterControl.js"
import UserContext from "./UserContext"

import './style.css'
export default function Main(props){
    var [currentUser, setCurrentUser] = useState(false);
    return(
        <UserContext.Provider value = {[currentUser, setCurrentUser]}>
            <RouterControl/>
        </UserContext.Provider>
    )
}