import React, {useState} from 'react';
export default function UserNote(props){
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

    var updateNote = () => {
        fetch("https://postgres-khai.herokuapp.com/notes/" +props.note.id,{
            method: "PUT",
            headers:{"content-type": "application/json"},
            body: JSON.stringify({
                title, content
            })
        })
        .then(alert("Note changed!"))
    }

    var deleteNote = () => {
        fetch("https://postgres-khai.herokuapp.com/notes/" +props.note.id,{
            method: "delete",
        })
        .then(props.setNotesChange(!props.notesChange))
        .then(alert("Delete note!"))
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