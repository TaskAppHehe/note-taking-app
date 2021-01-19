import React, {useState} from "react";
export default function SignUp(props){
    var [username, setUsername] = useState();
    var [password, setPassword] = useState();

    var inputFields = [
        {
            placeholder: "Username",
            type: "text",
            value: username,
            onChange: e => setUsername(e.target.value)
        },
        {
            placeholder: "Password",
            type: "password",
            value: password,
            onChange: e => setPassword(e.target.value)
        },
    ]

    var createNewUser = (e) => {
        e.preventDefault()
        fetch("https://postgres-khai.herokuapp.com/users",{
            method: "post",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(alert("Create account!"))
    }
    return(
        <div>
            <p>Use below to create new user</p>
            <form>
                {
                    inputFields.map(input => 
                        <input 
                            placeholder = {input.placeholder}
                            type = {input.type}
                            value = {input.value}
                            onChange = {input.onChange}
                        />
                    )
                }
                <button type = "submit" onClick = {createNewUser}>Create new account</button>
            </form>
        </div>
    )
}