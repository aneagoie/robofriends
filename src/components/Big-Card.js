import React from 'react';
import Card2 from './Card2';
import Arrow from './Arrow';
import { robots } from '../containers/robots';

const BigCard= ({i,Front,Back,onBack})=>{
    return(
        <div className = "About__Page tc">
            <Card2 
            key = {robots[i].key}
            nickname = {robots[i].username} 
            name={robots[i].name} 
            id = {robots[i].id} 
            email={robots[i].email}
            onBack={onBack} 
            />
            <Arrow Front={Front} Back={Back} />
        </div>
    );
}
export default BigCard