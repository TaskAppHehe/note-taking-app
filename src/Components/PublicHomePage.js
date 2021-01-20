import React from 'react';

import LogIn from "./Login"
import SignUp from "./SignUp"
export default function PublicHomePage(props){
    return(
        <div>
            <h1>Welcome to note taking app, login or sign up for private notes</h1>
            <LogIn/>
            <SignUp/>
        </div>
    )
}