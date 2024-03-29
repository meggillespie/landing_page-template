import React,  { Component } from 'react';
import { SocialBar } from '../components/SocialBar/SocialBar';
import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import { Router } from '../components/Router/Router';
import { Footer } from './../components/Footer/Footer';

export class Main extends Component {
	render() {
		return (
			<div className="App container-fluid main-container">
				<div className="row">
					<div className="col-md-12">
						<SocialBar />
						<NavigationBar />
						<Router />
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}