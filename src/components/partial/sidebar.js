import React from 'react';
import Base from '../base';

export default class Sidebar extends Base {

	render(){
		return (
				<aside className="main-sidebar">
					<section className="sidebar">
						<ul className="sidebar-menu">							
							<li className="treeview">
					          <a href="#">
					            <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
					          </a>
					          <ul className="treeview-menu">
					            <li className=""><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
					            <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
					          </ul>
					        </li>
						</ul>
					</section>
				</aside>
			);
	}

}