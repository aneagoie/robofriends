import React from 'react';

const Seachbox = ({search, searchChange}) =>{
    return(
        <div className = "Nav pa2">
            <input 
                className="pa3 f2 big u-center-text ba b--green bg-lightest-blue"
                type= "search" 
                placeholder = "search robots(friends)"
                onChange={searchChange}
            />
        </div>
    );
}
export default Seachbox