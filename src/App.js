import React, { Component } from 'react'
import Routes from './router/index.js'

class App extends Component {
    render() {
        return (
            <div classes="container">
                <Routes />
            </div>
        )
    }
}

export default App