import React, {Component} from "react";

class MyComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 3,
            text: "",
            message: "hi",
        }
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1})
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    send = () => {
        this.setState({message: this.state.text})
        this.state.text = ""
    }

    handlePress = (event) => {
        if(event.keyCode === 13){
            this.send()
        }
    }


    render() {
        return(
            <div>
                <h2>Helo My Component</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <input onKeyDown={this.handlePress} onChange={this.handleChange} type="text" placeholder="hello" value={this.state.text} />
                <button>Send</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default MyComponent



