import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {Router, hashHistory } from 'react-router';

import Routes from './routes';

//css
import './assets/css/bootstrap.css';

ReactDOM.render(	
	<Router history={hashHistory} routes={Routes}>		
	</Router>,
	document.getElementById('app')
);