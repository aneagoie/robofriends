import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './Card.js';  //const Card naam ka object present hai Card.js me //COMPONENT 1
//import CardList from './CardList.js'; //COMPONENT 2
import App from './App.js';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
//import {robots} from './robots.js';   //"const robots" naam ka object present hai Robots.js me

ReactDOM.render( 
<App/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
