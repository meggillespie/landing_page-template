import React, { Component } from 'react';

export class Thanks extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-8 offset-md-2 my-auto pt-4">
					<h2 style={{ fontWeight: '800', marginTop: '25vh' }}>Thanks for submitting your information!</h2>
					<h3 className="lead" style={{ marginBottom: '20vh' }}>We will be in touch with your estimate soon.</h3>
				</div>
			</div>
		);
	}
}