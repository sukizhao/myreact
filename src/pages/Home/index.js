import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('Test')
@observer
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>msg: {this.props.Test.msg}</p>
                <p>
                    <input type="text" value={this.props.Test.msg} onChange={this.props.Test.handleChangeMsg} />
                </p>
            </div>
        )
    }
}

export default Home