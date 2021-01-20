import React, {useState, useEffect, useContext} from 'react';

import UserContext from "./UserContext"
export default function Login(props){
    var [username, setUserName] = useState('');
    var [password, setPassWord] = useState('');
    var [users, setUsers] = useState([]);
    var [, setCurrentUser] = useContext(UserContext)

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
        users.map(user => {
            if(user.username === username && user.password === password) setCurrentUser(user)
        })
        
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