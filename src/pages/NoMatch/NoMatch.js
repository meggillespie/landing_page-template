import React, { Component } from 'react';
import noPageBackground from '../../media/pnf.png';

export class NoMatch extends Component {
	render () {
		return(
			<div className="row">
				<div className="col-md-12">
					<img src={ noPageBackground } alt="home page background" className="img-fluid" style={{ height: '100vh', filter: 'none' }} />
				</div>
			</div>
		);
	}
}