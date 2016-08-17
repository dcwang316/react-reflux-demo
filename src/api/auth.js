import {
	LOGIN_URL, 
	ADMIN_INFO_URL
} from './const';

import axios from 'axios';

export let postLogin = (data) => {
	return new Promise(function(resolve, reject){
		axios.post(LOGIN_URL,data).then(function(result){
			resolve(result)
		},function(error){
			reject(error)
		});
	});
}

export let getAdminByToken = (token) => {
	return new Promise(function(resolve, reject){
		http.get(ADMIN_INFO_URL,token).then(function(result){
			resolve(result)
		},function(error){
			reject(error)
		});
	});
}
