import React from 'react';

const Card = ({ name, email, id }) => {
  if (name.length > 16){
  let name1 = "";
  for (let i = 0; name.length > 16; i++){
    name1 += name[i];
    if (name1.length > 12){
      name1 += "...";
      break;
    }
  }
  name = name1;
}

  return (
    <div style={{
     width: 250, 
     height: 350}} className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}



export default Card;
