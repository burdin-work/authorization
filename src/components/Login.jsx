import React from 'react';
import {login, sign_in} from "../utils/api/api";
import {Redirect} from "react-router-dom";

const Login = ({isAuth, setIsAuth}) => {

    const [email, setEmail] = React.useState('');
    const [psw, setPsw] = React.useState('');

    const [error, setError] = React.useState('');
    const [authOption, setAuthOption] = React.useState(true);// toggle: log in / sign in

    const toggleAuthOption = () => {
        setAuthOption(!authOption);
        setError('');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        authOption
            ? login(email, psw, setIsAuth, setError)
            : sign_in(email, psw, setIsAuth, setError);
    };

    if (isAuth) {
        return <Redirect to="/profile"/>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container">

                {authOption ? <h1>Log in</h1> : <h1>New User</h1>}

                <label htmlFor="email"><b>Username</b></label>
                <input type="text" placeholder="Enter Email" id="email" value={email} required
                       onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" id="psw" value={psw} required
                       onChange={(e) => setPsw(e.target.value)}/>

                {error && <div className="error">{error}</div>}

                <button type="submit">
                    {authOption ? <>Authorize</> : <>Register</>}
                </button>

                <div className="wrapLinkToReg">
                    <span className="linkToReg" onClick={() => toggleAuthOption()}>
                        {authOption ? <>Sign in</> : <>Log in</>}
                    </span></div>
            </div>
        </form>
    );
};

export default Login;