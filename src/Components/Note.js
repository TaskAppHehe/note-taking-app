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
            cols: 60
        }
    ]

    function updateNote(){
        fetch("https://fast-forest-86060.herokuapp.com/notes/"+props.note._id,{
            method: "PUT",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                title: title,
                content: content
            })
        })
        .then(alert("Updated!"))
    }
    function deleteNote(){
        alert("Going to delete note id " + props.note._id)
        fetch("https://fast-forest-86060.herokuapp.com/notes/"+props.note._id,{
            method: "DELETE"
        })
        .then(() => {
            props.setDel(true)
        })
    }
    return(
        <div className="vertical-flex-container m-10">
            <p>_id {props.note._id}</p>
            {
                textAreaFields.map(textArea => 
                    <textarea 
                        value = {textArea.value} 
                        onChange = {textArea.onChange}
                        rows = {textArea.rows}
                        cols = {textArea.cols}/>
                )    
            }
            <div>
                <button onClick = {updateNote}>Update</button>
                <button onClick = {deleteNote}>Delete</button>
            </div>
        </div>
    )
}