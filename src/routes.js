import React from 'react';
import {Route,Redirect} from 'react-router';

//components
import Main from './components/main';
import Login from './components/login';
import Dashboard from './components/dashboard';

export default (		
		<Route>
			<Redirect from="/" to="dashboard"/>	
			<Route path="/" component={Main}>					
				<Route path="dashboard" component={Dashboard} />				
			</Route>
			<Route path="login" component={Login}></Route>
		</Route>

	)