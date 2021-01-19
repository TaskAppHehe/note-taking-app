import React, { useState, useContext, useEffect } from 'react';

import AddUserNote from "./AddUserNote"
import UserContext from "./UserContext"
import UserNote from "./UserNote"

export default function DashBoard(props){
    var [currentUser, setCurrentUser] = useContext(UserContext);
    var [notes, setNotes] = useState([]);
    var [notesChange, setNotesChange] = useState(false);

    useEffect(()=>{
        fetch("https://postgres-khai.herokuapp.com/users/" + currentUser.id +"/notes")
        .then(data => data.json())
        .then(data => setNotes(data))
        .then(setNotesChange(!notesChange))
    }, [currentUser.id, notesChange])

    return(
        <>
            <button onClick = {() => setCurrentUser()}>Log out</button>
            <AddUserNote/>
            <div className = "container">
                {
                    notes.map(note => 
                        <UserNote 
                            note = {note} 
                            notesChange = {notesChange}
                            setNotesChange = {setNotesChange}
                            />)
                }
            </div>
        </>
    )
}