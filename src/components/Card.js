import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <Link style={{textDecoration:"none"}} to={`/robots/${id}`}>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      </Link>
    </div >
  );
}

export default Card;
