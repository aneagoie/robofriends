import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, resquestRobots } from '../redux/actionCreators';
import { connect } from 'react-redux';

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

class App extends Component {

  componentDidMount() {
    this.props.requestingRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, isPending  } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);