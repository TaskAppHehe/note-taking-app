import React, {useState, useContext} from "react"

import UserContext from "./UserContext"

export default function AddNote(props){
    var [title, setTitle] = useState("")
    var [content, setContent] = useState("")
    var [currentUser] = useContext(UserContext)
    var inputFields = [
        {
            placeholder: "Title",
            type: "text",
            onChange: e => setTitle(e.target.value)
            
        },
        {
            placeholder: "Content",
            type: "text",
            onChange: e => setContent(e.target.value),
            rows: 10,
            cols: 50
        }
    ]

    function postNewNote(){
        if(!title || !content) {
            alert("Title or content cannot be left empty")
            return;
        }
        fetch("https://postgres-khai.herokuapp.com/users/" + currentUser.id + "/notes",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                title: title, 
                content: content
            })
        })
        .then(response => response.json())
        .then(alert("Added note!"))
    }
    return(
        <div className="vertical-flex-container width-fit-content">
            <h2>Add new note</h2>
            {
                inputFields.map(input => 
                <textarea
                    placeholder={input.placeholder}
                    type = {input.type}
                    onChange = {input.onChange}
                    
                />)
            }
            <button onClick={postNewNote}>Add note</button>
        </div>
    )
}