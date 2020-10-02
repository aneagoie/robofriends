import React from 'react';
const Card =({AboutRobo,name,email,id,key1})=>{
	return(
		<button onClick={(ke)=>AboutRobo(ke,key1)} className = "ma4 col-1-of-4 card mrg-top500 bg-light-blue card__design  grow" >
				<img className = "card card__photo" src = {`https://robohash.org/${id}`} alt = 'robo img'/>
				<div className = "card card__details u-center-text">
					<h2>{name}</h2>
					<p className="card__details--email">{email}</p>
				</div>
		</button>          
	);
}
export default Card