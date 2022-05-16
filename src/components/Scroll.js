import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ height: '900px', marginTop: '5px' }}>{props.children}</div>
	);
};

export default Scroll;
