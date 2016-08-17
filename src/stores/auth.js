import Reflux from 'reflux';

import AuthActions from '../actions/auth';
import {postLogin, getAdminByToken} from '../api/auth';

export default Reflux.createStore({
	listenables: AuthActions,
	onLogin(data){
		postLogin(data).then(function(result){	
			if(result.flag == true){
				this.trigger(result,'loginSuccess');
			}else{
				this.trigger(result,'loginFail');
			}		
			
		}.bind(this),function(error){			
			this.trigger(error,'loginFail');
		}.bind(this));
	},
	onLogout(){
		this.trigger(result,'logout');
	},
	onAdminInfo(token){			
		getAdminByToken(token).then(function(result){
			if(result.flag == true){
				this.trigger(result,'getAdminInfoSuccess');
			}else{
				this.trigger(result,'getAdminInfoFail');
			}			
		}.bind(this),function(error){			
			this.trigger(error,'getAdminInfoFail');
		}.bind(this));
	}
})
