import React, { Component } from 'react';
import { JumboFooterHeader } from '../../components/JumboFooterHeader/JumboFooterHeader';
import {SideNav} from "../../components/SideNav/SideNav";

export class Fha extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light" style={{  paddingTop: '100px' }}>
					<div className="container">
						<h2 className="display-4 pt-5">FHA Loans</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 offset-md-1">
						<div className="row">
							<div className="col-md-12 text-left pt-5 buffer-content lead">
								<h3>What Are FHA Loans?</h3>
								<p className="pt-3">
									FHA stands for the Federal Housing Administration, a government agency that standardizes and insures
									home mortgages, which makes it easier for more people to get loans to purchase a home.
								</p>

								<h3 className="pt-4">FHA Loan Requirements</h3>
								<p className="pt-3">
									The FHA requires that homes with FHA-backed loans meet certain standards. The homes must also be
									appraised by an FHA-approved appraiser in order to qualify. FHA loans require that you pay an up
									front Mortgage Insurance premium of 1.75% of the loan amount. This may be paid at closing or rolled
									into the loan.
								</p>
								<p className="pt-3">In order to pay your down payment with gift funds, the gift give must meet certain FHA requirements.</p>

								<h3 className="pt-4">FHA Loan Limits</h3>
								<p className="pt-3">
									FHA loan limits vary by county, with loans in some counties financed for up to $679,650.
								</p>

								<h3 className="pt-4">Are You Ready To Apply For An FHA Loan?</h3>
								<p className="pt-3">
									It’s easy! Simply apply online now through our WBM ApplicationTM or contact us to speak with one of
									our friendly FHA loan specialists for a no-obligation consultation.
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 text-left buffer-content">
						<h5 className="pt-5">WHY CHOOSE FHA LOANS?</h5>
						<p className="text-sm-left py-3">There are several reasons that FHA loans might be a good choice:</p>
						<ul className="list-unstyled text-sm-left">
							<li>One of the easiest loans to qualify for</li>
							<li>Great for first-time home buyers</li>
							<li>Only require a minimum of 3.5% down</li>
							<li>Generally allowed for borrowers with lower credit scores</li>
							<li>You may pay your down payment with money you receive as a gift</li>
						</ul>
					</div>

					<SideNav links={ [{linkName: 'Conventional Loans', linkAddress: '/conventional-loan'}, {linkName: 'VA Loans', linkAddress: '/veterans-loan'}] }/>

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