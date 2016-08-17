import React from 'react';
import Base from './base';

import AuthActions from '../actions/auth';
import AuthStore from '../stores/auth';

export default class Login extends Base {

	constructor(props, context){
		super(props, context);		
		this.state = Object.assign({
			name:'',
			password:''
		})
	}

	componentWillMount() {
	    this.listenTo(AuthStore, this.handleTriggers.bind(this));
	 }

	 handleTriggers(data, type){
	 	switch(type){
	 		case 'loginSuccess':	 	
	 				sessionStorage.setItem('jwt_token',data.jwt_token);		
	 				this.redirect('/dashboard');
	 			break;
	 		case 'loginFail':
	 				alert('出错了');
	 			break;
	 	}
	 }

	doLogin(){
		AuthActions.login({name:this.state.name,password:this.state.password});
	}

	render(){		
		return (
			<div className="login-page">
				<div className="login-box">		
					<div className="login-box-body">
						<p className="login-box-msg">Sign in to start your session</p>				
						<div className="form-group has-feedback">
							<input type="text" className="form-control" placeholder="Email" onChange={(e)=>this.setState({name:e.target.value})}/>
							<span className="glyphicon glyphicon-envelope form-control-feedback"></span>
						</div>
						<div className="form-group has-feedback">
							<input type="password" className="form-control" placeholder="Password" onChange={(e)=>this.setState({password:e.target.value})}/>
							<span className="glyphicon glyphicon-lock form-control-feedback"></span>
						</div>
						<div className="row">
							<div className="col-xs-8">							
							</div>
							<div className="col-xs-4">
								<button type="button" className="btn btn-primary btn-block btn-flat" onClick={this.doLogin.bind(this)}>Sign In</button>
							</div>
						</div>	
					</div>
				</div>
			</div>);
		}
	}

