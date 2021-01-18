import React, { useContext } from 'react';
import UserContext from "./UserContext"

export default function DashBoard(props){
    var [user, setUser] = useContext(UserContext);
    return(
        <div>
            <p>This is the dashboard after you logs in </p>
            <p>user</p>
        </div>
    )
}