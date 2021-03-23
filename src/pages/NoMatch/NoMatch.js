import React, { Component } from 'react';

export class NoMatch extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-8 offset-md-2 my-auto pt-5" >
					<h2 style={{ fontWeight: '800', marginTop: '25vh' }}>Page Not Found.</h2>
					<h3 className="lead" style={{ marginBottom: '20vh' }}>Check the url.</h3>
				</div>
			</div>
		);
	}
}