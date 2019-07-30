import React, { Component } from 'react';
import { JumboFooterHeader } from '../../components/JumboFooterHeader/JumboFooterHeader';

export class About extends Component {
	render () {
		return(
				<div>
					<div className="jumbotron jumbotron-fluid mb-0 bg-light " style={{ paddingTop: '100px' }}>
						<div className="container">
							<h2 className="display-4 pt-5">Lakeway Lending</h2>
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-10 offset-md-1">
							<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat.
							</p>
							<p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
								et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
								aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>

					<JumboFooterHeader
						firstIcon="comments"
						firstTitle="Chat With Us"
						firstText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
						secondIcon="smile"
						secondTitle="Happy Customers"
						secondText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
						thirdIcon="bolt"
						thirdTitle="Fast Support"
						thirdText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum et sed quos quaerat enim."
					/>
				</div>
		);
	}
}