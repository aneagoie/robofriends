import React, { Component } from 'react';

class ErrorBoundry extends Component {  //catch error for other components
    constructor(props) {
        super(props);   //allows access to this.props in the constructor (which we end up not needing)
        this.state ={
            hasError: false
        }
    }

componentDidCatch(error, info) {        //new lifecycle method in react16, 
    this.setState({ hasError: true })   //if the component errors out, trigger for render
}

    render() {
        if(this.state.hasError) {
            return <h1>Oops! Something went wrong.</h1>  //displays meaningful error info to the user
        }
        return this.props.children                      //default render
    }
}

export default ErrorBoundry;