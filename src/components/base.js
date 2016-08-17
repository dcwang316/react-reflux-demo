import React, {Component}from 'react';
import { decorate as mixin } from 'react-mixin';
import { ListenerMixin } from 'reflux';
import { Router } from 'react-router';

@mixin(ListenerMixin)

class Base extends Component{	

	constructor(props, context){
		super(props, context);		
	}	

	redirect(route){		
		this.context.router.push(route);
	}

}

Base.contextTypes = {
	router: () => React.PropTypes.func.isRequired
}

export default Base;