import React, {Component} from 'react';
import Base from './base';

import Sidebar from './partial/sidebar';
import Header from './partial/header';
import Footer from './partial/footer';

import AuthActions from '../actions/auth';
import AuthStore from '../stores/auth';


export default class App extends Base { 	

	componentWillMount(){
		this.listenTo(AuthStore, this.handleTriggers.bind(this));

		let token = sessionStorage.getItem('jwt_token');	
		if(!token){
			this.redirect('/login');
		}
		AuthActions.adminInfo(token);
	}

	handleTriggers(data, type){
		switch(type){
			case 'getAdminInfoSuccess':
			console.log('getAdminInfoSuccess')
			break;
			case 'getAdminInfoFail':
			console.log('getAdminInfoFail')
			break;
		}
	}

	render(){	
		return (
			<div className="wrapper">
			<Header />
			<Sidebar />
			<div className="content-wrapper">
			{this.props.children}
			</div>
			<Footer />
			</div>
			);	
		}
	}