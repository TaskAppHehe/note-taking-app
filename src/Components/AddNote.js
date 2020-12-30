import React, {useState} from "react"
export default function AddNote(props){
    var [title, setTitle] = useState("")
    var [content, setContent] = useState("")

    var inputFields = [
        {
            placeholder: "Title",
            type: "text",
            onChange: e => setTitle(e.target.value)
        },
        {
            placeholder: "Content",
            type: "text",
            onChange: e => setContent(e.target.value)
        }
    ]

    function postNewNote(){
        fetch("https://fast-forest-86060.herokuapp.com/notes",{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                "_id":5,
                title:title,
                content:content
            })
        })
            .then(response => response.json())
            .then(data => alert(data.status + " fds " + data.message))
            .then(alert("I'm done!"))
    }
    return(
        <div>
            <h2>Add new note</h2>
            {
                inputFields.map(input => 
                <input 
                    placeholder={input.placeholder}
                    type = {input.type}
                    onChange = {input.onChange}/>)
            }
            <button onClick={postNewNote}>Add note</button>
        </div>
    )
}