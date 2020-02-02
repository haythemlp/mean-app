import React, {Component} from 'react';
import './App.css';
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import Auth from './Services/Auth'

import history from './lib/history';


class AppPage extends Component {


    UNSAFE_componentWillMount() {
        Auth.isAuthenticated().then(data => {

        }).catch(() => {
            localStorage.clear()
            history.push('/login')

        })
    }


    render() {

        return <h1>hello </h1>
    }


}


export default class App extends Component {

    render() {

        return (
            <div className="App">
                <Router history={history}>
                    <Switch>
                        <Route path="/login">
                            <LoginComponent/>
                        </Route>
                        <Route path="/register">
                            <RegisterComponent/>
                        </Route>

                        <Route path="/app">
                            <AppPage/>


                        </Route>
                        <Route path="/">
                            <Redirect to="/app"/>
                        </Route>
                    </Switch>

                </Router>
            </div>
        )


    }
}

