import React, { Component } from 'react'

export class StatePractice extends Component {
    constructor() {
        super()
        this.state = {
            message: '',
            imageWidth: ''
        }
      
      this.handleFocus = this.handleFocus.bind(this)
      this.handleOnLoad = this.handleOnLoad.bind(this)  
    }

    handleFocus = (e) => {
        this.setState({
            message: 'You have agreed with the terms'
        })
        e.preventDefault();
    }

    handleOnMouse() {
        this.setState({
            message: 'You have agreed to the terms and conditions'
        })
    }

    handleOnLoad = (e) => {
        const image = document.getElementById('image');
        console.log(image);
        if (image.naturalWidth > 100) {
            console.log("The image is big");
        }
    }
    

    render() {
        return (
            <div>
                <div>
                <img id="image" src='https://picsum.photos/200/300' onLoad={this.handleOnLoad}></img>
                </div>
                <form>
                    <input type="checkbox" 
                            name="agreed"
                            onFocus={this.handleFocus}></input>
                    <h3 onMouseEnter={this.handleOnMouse} 
                        name="msg"
                        >{this.state.message}</h3>    
                </form>
                
            </div>
        )
    }
   
}

export default StatePractice;
console.log(StatePractice);
