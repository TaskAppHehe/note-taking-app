import React, {useState, useEffect} from "react";

import Note from "./Note"
import AddNote from "./AddNote"

import "./style.css"
export default function App(){
    var [notes,setNotes] = useState([])
    var [keys, setKeys] = useState(new Set())
    var [add, setAdd] = useState(false)
    var [del, setDel] = useState(false)

    useEffect(()=>{
        setNotes([])
        fetch("https://fast-forest-86060.herokuapp.com/notes")
            .then(data => data.json())
            .then(data => {
                setNotes(data)
                var newKeys = new Set(keys)
                //add all the __id to keys so that we can figure out new unique __id
                data.map(d => {
                    if(!newKeys.has(d._id)) newKeys.add(d._id)
                })
                setKeys(newKeys)
                setAdd(false)
                setDel(false)
            })
    },[add, del])

    return (
        <div>
            <AddNote keys = {keys} setAdd = {setAdd}/>
            <div className="container">
                {
                    notes.map(note => <Note note = {note} setDel = {setDel}/>)
                }
            </div>
        </div>
    )
}