import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Refinance } from '../pages/Refinance/Refinance';
import { Purchase } from '../pages/Purchase/Purchase';
import { NoMatch } from '../pages/NoMatch/NoMatch';

export class Router extends Component {
	render () {
		return (
			<div className="row">
				<div className="col-md-12">
					<main>
						<Switch>
							<Route path="/" exact component={ Home } />
							<Route path="/home-refinance" exact component={ Refinance } />
							<Route path="/home-purchase" exact component={ Purchase } />
							<Route component={ NoMatch } />
						</Switch>
					</main>
				</div>
			</div>
		);
	}
}
