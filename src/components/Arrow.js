import React, { Component } from 'react';
class Arrow extends Component{
    render(){
        const {Front,Back}= this.props;
        return(
            <div>
                <button onClick={Back} className = "Arrow__left">
                </button>
                <button onClick={Front} className = "Arrow__right">
                </button>
            </div>
        );
    }
}
export default Arrow