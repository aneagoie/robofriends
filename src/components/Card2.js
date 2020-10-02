import React from 'react';

const Card2 = (props)=> {
    return(
        <div>
            <button onClick = {props.onBack} className="bg-black green f1 lh-title top-left">
				BACK 
			</button>
            <div className = "big-card ">
                <img className = "big-card big-card__photo" src = {`https://robohash.org/${props.id}`} alt = 'robo img'/>
                <div className = "big-card big-card__details u-center-text">
                    <h2 className="big-card__heading">{props.name}</h2>
                    <p className="big-card__email">{props.email}</p>
                </div>
            </div>
        </div>        
    );
}
export default Card2