import React, {useState} from "react";
export default function Note(props){

    var [title, setTitle] = useState(props.note.title)
    var [content, setContent] = useState(props.note.content)

    var textAreaFields = [
        {
            value: title,
            onChange: e => setTitle(e.target.value)
        },
        {
            value: content,
            onChange: e => setContent(e.target.value),
            rows: 10,
            cols: 50
        }
    ]

    function updateNote(){
        fetch("https://fast-forest-86060.herokuapp.com/notes/"+props.note._id,{
            method: "PUT",
            headers: {"content-type": "application/json", 
                      "Authorization": "Basic" + btoa("admin:password")},
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        .then( alert("Note changed!"))
    }
    function deleteNote(){
        if(window.confirm("Do you want to delete this note?")){
            fetch("https://fast-forest-86060.herokuapp.com/notes/"+props.note._id,{
            method: "DELETE",
            headers: {"content-type": "application/json", 
                      "Authorization": "Basic " +  btoa("admin:password")}
            })
            .then(() => {
                props.setNoteChanged(true)
            })
        }
    }
    return(
        <div className="vertical-flex-container margin-10">
            {
                textAreaFields.map(textArea => 
                    <textarea className = "bg-yellow"
                        value = {textArea.value} 
                        onChange = {textArea.onChange}
                        rows = {textArea.rows}
                        cols = {textArea.cols}
                    />
                )    
            }
            <div>
                <button onClick = {updateNote}>Update</button>
                <button onClick = {deleteNote}>Delete</button>
            </div>
        </div>
    )
}