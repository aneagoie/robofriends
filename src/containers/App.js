import React from 'react';
import 'tachyons';
import CardList from "../components/CardList"
import {robots } from './robots'
import Footer from '../components/Footer';
import './index.css';
import Heading from '../components/Heading';
import Searchbox from "../components/Searchbox";
import BigCard from "../components/Big-Card";

class App extends React.Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            search:'',
            index: '',
            route: 'Home'
        }
    }

    searchChange=(event)=>{
        this.setState({search: event.target.value})
    }

    AboutRobo = (b,i)=>{
        this.setState({index:i,route:'About'});
    }

    FrontArrow=()=>{
        if(this.state.index<this.state.robots.length-1){
            this.setState({index:this.state.index+1})
        } else {
            this.setState({index:0})
        }
    }

    BackArrow=()=>{
        if(this.state.index!==0){
            this.setState({index:this.state.index-1})
        } else{
            this.setState({index:this.state.robots.length-1})
        }
    }

    onBack=()=>{
        this.setState({route:'Home'})
    }

    render(){
        const {robots, search,route,index} = this.state;
        const {AboutRobo,searchChange,FrontArrow,BackArrow,onBack}= this;
        const filterRobo= robots.filter(robot =>{
            return robot.name.toLowerCase().includes(search.toLowerCase());
        });
        if(route==="Home"){
            return(
                <div className="tc">
                    <Heading />
                    <Searchbox searchChange={searchChange}/>
                    <CardList robots = {filterRobo} AboutRobo= {AboutRobo} />
                    <Footer />
                </div>
            );
        } else{
            return(
                <BigCard i = {index} Front={FrontArrow} Back={BackArrow} onBack={onBack} />
            );
        }
    }
}
export default App