import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search robots from here"
        onChange={searchChange}
        style={{ borderRadius: "10px", width: "400px" }}
      />
    </div>
  );
};

export default SearchBox;
