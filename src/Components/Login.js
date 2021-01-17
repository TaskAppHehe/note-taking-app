import React, {useState, useEffect} from 'react';
export default function Login(props){
    var [username, setUserName] = useState();
    var [password, setPassWord] = useState();
    var [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch("https://postgres-khai.herokuapp.com/users")
        .then(data => data.json())
        .then(data => setUsers(data))
    },[])
    var inputFields = [
        {
            type: "text",
            value: username,
            placeholder: "username",
            onChange: e => setUserName(e.target.value),
        },
        {
            type: "password",
            value: password,
            placeholder: "password",
            onChange: e => setPassWord(e.target.value)
        }
    ]

    var handleSubmit = (e) => {
        e.preventDefault();
        var signedIn = false;
        users.map(user => {
            if(user.username == username && user.password == password)
            {
                signedIn = true;
            }
        })
        if(signedIn) alert("Signed in")
        else alert("You failed")
    }

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                {
                    inputFields.map(input => 
                        <input 
                            type = {input.type}
                            value = {input.value}
                            placeholder = {input.placeholder}
                            onChange = {input.onChange}
                        />)
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}