import React, {Component} from 'react';
import './App.css';
import LoginComponent from './components/login';
import RegisterComponent from './components/register';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Auth from './Services/Auth'

//import history from './Services/History';


function AppPage(props) {
    console.log(props)


    if (props.status) {
        return <Redirect to="/login"/>


    }
    return <h1>hello </h1>

}


export default class App extends Component {
    state = {notAuthenticated: false};

    UNSAFE_componentWillMount() {
        Auth.isAuthenticated().then(data => {


            this.setState({notAuthenticated: !data})

        })
    }

    render() {

        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/login">
                            <LoginComponent/>
                        </Route>
                        <Route path="/register">
                            <RegisterComponent/>
                        </Route>

                        <Route path="/app">
                            <AppPage status={this.state.notAuthenticated}/>


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

