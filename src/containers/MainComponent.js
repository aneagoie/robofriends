import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { setSearchField, resquestRobots } from '../redux/actionCreators';
import { connect } from 'react-redux';
import Details from "../components/Details";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestingRobots.robots,
        error: state.requestingRobots.error,
        isPending: state.requestingRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        requestingRobots: () => dispatch(resquestRobots())
    }
}

class MainComponent extends React.Component {

    componentDidMount() {
        this.props.requestingRobots()
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={() => <App searchField={searchField} 
                            onSearchChange={onSearchChange} isPending={isPending} robots={robots} />} />
                        <Route exact path="/robots/:id" render={({match}) => <Details robots={robots} id={match.params.id}  />} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);