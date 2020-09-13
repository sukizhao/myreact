import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'

class Router extends Component {
    render() {
        return (
            <Switch>
                <Redirect path="/" to="/home" exact />
                <Route path="/home" component={Home} />
            </Switch>
        )
    }
}

export default Router