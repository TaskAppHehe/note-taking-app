import React, { useState, useContext, useEffect } from 'react';

import AddUserNote from "./AddUserNote"
import UserContext from "./UserContext"
import UserNote from "./UserNote"

export default function DashBoard(props){
    var [currentUser] = useContext(UserContext);
    var [notes, setNotes] = useState([]);

    useEffect(()=>{
        fetch("https://postgres-khai.herokuapp.com/users/" + currentUser.id +"/notes")
        .then(data => data.json())
        .then(data => setNotes(data))
    }, [currentUser.id])
    return(
        <>
            <AddUserNote/>
            <div className = "container">
                {
                    notes.map(note => <UserNote note = {note}/>)
                }
            </div>
        </>
    )
}