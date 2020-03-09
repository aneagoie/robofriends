import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSearchField, requestRobots } from '../actions'

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

import './App.css';

// parameter state comes from index.js provider store state (rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}
// dispatch the DOM changes to call an action, note: mapStateToProps returns object, mapDispatchToProps returns a function
// the function returns an object then uses connect to change data from the reducers.

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
}
render() {
  const { robots, searchField, onSearchChange, isPending } = this.props;
  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
     <div className='tc'>
       <h1 className='f1'>RoboFriends</h1>
       <SearchBox searchChange={onSearchChange}/>
       <Scroll>
         { isPending ? <h1>Loading</h1> :
           <ErrorBoundry>
             <CardList robots={filteredRobots} />
           </ErrorBoundry>
         }
       </Scroll>
     </div>
   );
 }
}
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response=> response.json())
  //     .then(users => {this.setState({ robots: users})});
  // }

  // onSearchChange = (event) => {
  //   this.setState({ searchfield: event.target.value })
  // }


// action done from DispatchToProps will change state from mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
