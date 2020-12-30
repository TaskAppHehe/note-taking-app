import React, {useState, useEffect} from "react";

import Note from "./Note"
import AddNote from "./AddNote"
export default function App(props){
    var [notes,setNotes] = useState([])

    useEffect(()=>{
        fetch("https://fast-forest-86060.herokuapp.com/notes")
            .then(data => data.json())
            .then(data => setNotes(data))
    },[])

    return (
        <div>
            <AddNote/>
            {
                notes.map(note => <Note note = {note}/>)
            }
        </div>
    )
}