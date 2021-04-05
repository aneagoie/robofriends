import React from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import Header from '../Header/header';
import './MainPage.styles.css';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
        return this.props.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
      })
  }

  render() {
    const { onSearchChange, isPending } = this.props;

    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={this.filterRobots()} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage;
