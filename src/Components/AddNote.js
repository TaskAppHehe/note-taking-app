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
        var i = 0;
        while(props.keys.has(i)) i++
        fetch("https://fast-forest-86060.herokuapp.com/notes",{
            method: "POST",
            headers: {"content-type": "application/json", 
                      "Authorization": "Basic " +  btoa("admin:password")},
            body: JSON.stringify({
                _id : i,
                title: title, 
                content: content
            })
        })
            .then(response => response.json())
            .then(() => {
                props.setAdd(true)
            })
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