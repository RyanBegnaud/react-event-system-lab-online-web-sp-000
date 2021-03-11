import React, {Component} from 'react'

export default class EyesOnMe extends Component {
    speak = (e) => {
        if(e.type === "focus"){
            console.log("Good!")
        } else {
            console.log('Hey! Eyes on me!')
        }
    }

  
    render() {
        return(
            <button onFocus={this.speak} onBlur={this.speak}></button>
        )
    }
}