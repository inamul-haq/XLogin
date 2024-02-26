import React, { useState } from "react";

export default function Xlogin() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormChange= (e) => {
        e.preventDefault();
        if(username==='user' && password==='password'){
            setErr('');
            setIsSubmitted(true);
        }else{
            setErr('Invalid username or password');
            setIsSubmitted(false);
        }

    }

    return <div>
            <h1>Login Page</h1>
            {
            isSubmitted?(
            <div>
                <p>Welcome, {username}!</p>
            </div>
            ):(
            <form onSubmit={handleFormChange}>
                {err && <p>{err}</p>}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="username" value={username} onChange={(e) => {setUserName(e.target.value)}} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                
            </form>)}
        </div>

}
