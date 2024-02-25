import React, { useState } from "react";

export default function Xlogin() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [authorizedUser, setAuthorizedUser] = useState(false);
    const [initialLogin,setInitialLogin] = useState(true)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setInitialLogin(false);
        if (username !== 'user' || password !== 'password') {
            setErrorMessage('Invalid username or password');
        } else {
            setAuthorizedUser(true);
        }
    }

    return (
        <div>
            {authorizedUser ? (
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <h1>Login Page</h1>
                        <label>Welcome, {username}!</label>
                    </form>
                </div>
            ) : (
                <div>{initialLogin?(<form onSubmit={handleFormSubmit}>
                    <h1>Login Page</h1>
                    <label>Username:
                        <input required type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                    </label><br />
                    <label>Password:
                        <input required type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </label><br />
                    <button type="submit">Submit</button>
                </form>
                ):(
                <form onSubmit={handleFormSubmit}>
                    <h1>Login Page</h1>
                    {errorMessage && <p>{errorMessage}<br /><br /></p>}
                    <label>Username:
                        <input required type="text" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                    </label><br />
                    <label>Password:
                        <input required type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                    </label><br />
                    <button type="submit">Submit</button>
                </form>
                )}
                    
                </div>
            )}
        </div>
    );
}
