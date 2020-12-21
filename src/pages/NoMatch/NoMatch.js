import React, { Component } from 'react';
import noPageBackground from '../../media/pnf.png';

export class NoMatch extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-8 offset-md-2 mt-4 pt-4">
					<img src={ noPageBackground } alt="home page background" className="img-fluid" style={{ height: '60vh', filter: 'none' }} />
				</div>
			</div>
		);
	}
}