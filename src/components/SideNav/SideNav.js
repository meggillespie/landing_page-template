import React, { Component } from 'react';
import './SideNav.scss';

export class SideNav extends Component {
	render () {
		return (
			<div className="col-md-2 d-none d-lg-block">
				<div className="container sidenav">
					<ul className="nav flex-column text-right font-weight-bold">
						<li className="nav-item">
							<a className="nav-link" href={this.props.links[0].linkAddress} rel="preconnect">{this.props.links[0].linkName}</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href={this.props.links[1].linkAddress} rel="preconnect">{this.props.links[1].linkName}</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}