import React,  { Component } from 'react';
import NavigationBar from './NavigationBar/NavigationBar';
import { Router } from './Router';
import { Footer } from './Footer/Footer';

export class Main extends Component {
	render() {
		return (
			<div className="App container-fluid">
				<div className="row">
					<div className="col-md-12">
						<NavigationBar />
						<Router />
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}