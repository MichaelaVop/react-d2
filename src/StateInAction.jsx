import React, { Component } from 'react'

class StateInAction extends Component {
    constructor() {
        super()
        this.state = {
            text: 'State is now in action'
        }
        setTimeout(() => {
            this.setState({
                text: 'State has changed'
            })
        }, 2000)
        
    }

    render() {
        return (
            <div>
                <h1>{ this.state.text }</h1>
            </div>
        );
    }
}

export default StateInAction;