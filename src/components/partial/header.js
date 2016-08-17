import React from 'react';
import Base from '../base';

export default class Header extends Base {
	render(){
		return (
				<div className="main-header">
					<a className="logo" href="index2.html">				     
				      <span className="logo-mini">React</span>				   
				      <span className="logo-lg"><b>React</b> reflux demo</span>
				    </a>
				    <nav className="navbar navbar-static-top">
				    	<a role="button" data-toggle="offcanvas" className="sidebar-toggle" href="#">
					       <span className="sr-only">Toggle navigation</span>
					    </a>
					    <div className="navbar-custom-menu">
					    	<ul className="nav navbar-nav">
					    		<li>
						            <a href="#"><i className="fa fa-gears"></i></a>
						        </li>
					    	</ul>
					    </div>
				    </nav>
				</div>
			);
	}
}
