import './App.css';
import React, {useEffect} from 'react';
import Login from "./components/Login";
import {Switch, Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import Profile from "./components/Profile";
import Preloader from "./components/common/Preloader";
import {me} from "./utils/api/api";
import Header from "./components/Header";


const App = () => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [completed, setCompleted] = React.useState(false);


    useEffect(() => {
        me(setIsAuth, setCompleted);
    }, []);


    if (!completed) {
        return <Preloader/>
    }

    return (
        <Router>
            <div className="App">
                <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
                <Switch>
                    <Route exact path='/' render={() =>
                        isAuth
                            ? <Redirect to="/profile"/>
                            : <Redirect to={"/login"}/>
                    }/>

                    <Route path='/profile' render={() =>
                        <Profile isAuth={isAuth}/>}/>

                    <Route path='/login' render={() =>
                        <Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
