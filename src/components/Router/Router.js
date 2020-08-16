import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { NoMatch } from '../../pages/NoMatch/NoMatch';

export class Router extends Component {
	render () {
		return (
			<div className="row">
				<div className="col-md-12">
					<main>
						<Switch>
							<Route path="/" exact component={ Home } />
							<Route component={ NoMatch } />
						</Switch>
					</main>
				</div>
			</div>
		);
	}
}
