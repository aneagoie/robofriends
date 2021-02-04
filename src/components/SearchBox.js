import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <label htmlFor="searchBox">search box</label>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        id='searchBox'
        placeholder='search robots'
        label
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;