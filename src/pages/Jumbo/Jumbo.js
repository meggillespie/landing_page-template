import React, { Component } from 'react';

export class Jumbo extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light " style={{ paddingTop: '100px' }}>
					<div className="container">
						<h2 className="display-4 pt-5">Jumbo Loans</h2>
					</div>
				</div>

			</div>
		);
	}
}