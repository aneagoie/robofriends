import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

const App = (props) => {

 
    
    const filteredRobots = props.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(props.searchField.toLowerCase());
    })
    return props.isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={props.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  
}

export default App;