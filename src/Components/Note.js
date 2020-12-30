import React from "react";
export default function Note(props){
    function deleteNote(){
        fetch("https://fast-forest-86060.herokuapp.com/notes/"+props.note._id,{
            method: "DELETE"
        })
        .then(alert("Deleted!"))
    }
    return(
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.content}</p>
            <button onClick={deleteNote}>Delete</button>
        </div>
    )
}