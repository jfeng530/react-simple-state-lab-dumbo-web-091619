import React, { Component } from 'react';

export class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    changeColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div onClick={this.changeColor} className='cell' style={{backgroundColor: this.state.color}}>
                
            </div>
        );
    }
}

export default Cell;
