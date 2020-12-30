import React from "react";
export default function Note(props){
    return(
        <div>
            <h3>{props.note.title}</h3>
            <p>{props.note.content}</p>
        </div>
    )
}