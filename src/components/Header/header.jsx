import React from 'react';
import CounterButton from '../CounterButton/counterButton';

const Header = React.memo( () => {
        return(
            <div>
                <h1 className='f1'>RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        ); 
})

export default Header;