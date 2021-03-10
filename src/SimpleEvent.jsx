import React, { Component } from 'react'

class SimpleEvent extends Component {
    constructor () {
        super()
        this.state = {
            btnText: 'Bite me',
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = {
        btnText: 'Click on me',
        inputText: ''
    }
    handleClick() {
        console.log('clicked');
    }
    handleChange = (e) => {
        console.dir(e.target.value);
        this.setState({
            inputText: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log('form submitted', this.state.inputText);
        e.preventDefault();
    }

    render() {
        
        return (
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <button className="btn" type="submit">{ this.state.btnText }</button>
                    <input type="text" placeholder="Enter some text" onChange={ this.handleChange }/>
                </form>
            </div>
        )
    }
}

export default SimpleEvent;
