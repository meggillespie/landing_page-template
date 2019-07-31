import React, { Component }  from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Purchase } from '../../pages/Purchase/Purchase';
import { Conventional } from '../../pages/Conventional/Conventional';
import { Fha } from '../../pages/Fha/Fha';
import { Veterans } from '../../pages/Veterans/Veterans';
import { Refinance } from '../../pages/Refinance/Refinance';
import { Reverse } from '../../pages/Reverse/Reverse';
import { Blog } from '../../pages/Blog/Blog';
import { Calculators } from '../../pages/Calculators/Calculators';
import { About } from '../../pages/About/About';
import { Rates } from '../../pages/Rates/Rates';
import { Contact } from '../../pages/Contact/Contact';
import { Testimonials } from '../../pages/Testimonials/Testimonials';
import { Jumbo } from '../../pages/Jumbo/Jumbo';
import { Faq } from '../../pages/Faq/Faq';
import { NoMatch } from '../../pages/NoMatch/NoMatch';

export class Router extends Component {
	render () {
		return (
			<div className="row">
				<div className="col-md-12">
					<main>
						<Switch>
							<Route path="/" exact component={ Home } />
							<Route path="/home-loans" component={ Purchase } />
							<Route path="/conventional-loan" component={ Conventional } />
							<Route path="/fha-loan" component={ Fha } />
							<Route path="/veterans-loan" component={ Veterans } />
							<Route path="/home-refinance" component={ Refinance } />
							<Route path="/reverse-mortgage" component={ Reverse } />
							<Route path="/mortgage-blog" component={ Blog } />
							<Route path="/mortgage-calculators" component={ Calculators } />
							<Route path="/mortgage-rates" component={ Rates } />
							<Route path="/about" component={ About } />
							<Route path="/contact" component={ Contact } />
							<Route path="/testimonials" component={ Testimonials } />
							<Route path="/jumbo-mortgage" component={ Jumbo } />
							<Route path="/mortgage-faqs" component={ Faq } />
							<Route component={ NoMatch } />
						</Switch>
					</main>
				</div>
			</div>
		);
	}
}
