import React from 'react';
import Card from './Card';
const CardList = ({robots,AboutRobo})=>{
    return(
    <div className = "Robo">
      <div className = "row">
        {
          robots.map((user,i) =>{
            return (<Card 
              AboutRobo = {AboutRobo}
              key1 = {robots[i].key-1}
              name={robots[i].name} 
              id = {robots[i].id} 
              email={robots[i].email} 
              />
            );
          })
        }
      </div>
    </div>  
    );
}
export default CardList