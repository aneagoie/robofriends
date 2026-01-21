import React from 'react';

const Scroll = (props) => {
	return (
		<div style= {{overflow: 'Scroll', border: '5px solid black', height:'900px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;