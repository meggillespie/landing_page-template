import React, { Component } from 'react';
import { JumboFooterHeader } from '../../components/JumboFooterHeader/JumboFooterHeader';
import {SideNav} from "../../components/SideNav/SideNav";

export class Veterans extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light" style={{ paddingTop: '100px' }}>
					<div className="container">
						<h2 className="display-4 pt-5">Veteran's Loans</h2>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 offset-md-1">
						<div className="row">
							<div className="col-md-12 text-left pt-5 buffer-content lead">
								<h3>What Are VA Loans?</h3>
								<p className="pt-3">
									VA loans are U.S. government-backed home mortgages for veterans, individuals currently serving in
									the U.S. military, reservists, and surviving, non-remarrying spouses of such a person (with a
									Certificate of Eligibility).
								</p>

								<h3 className="pt-4">Conventional Loans VS FHA & VA Loans</h3>
								<p className="pt-3">
									VA loan limits vary by location – $453,100 in most counties, and up to $721,050 in the nations’
									most expensive counties.
								</p>

								<h3 className="pt-4">Are You Ready To Apply For A VA Home Loan?</h3>
								<p className="pt-3">
									It’s easy! You can apply online now through our WBM ApplicationTM or contact us to speak with one of
									our friendly VA loan specialists for a no-obligation consultation. We’ll be happy to answer all of
									your questions.
								</p>
							</div>

						</div>
					</div>

					<div className="col-md-3 buffer-content text-left">
						<h5 className="pt-5">WHY CHOOSE A VA HOME LOAN?</h5>
						<p className="text-sm-left py-3">There are several reasons that VA loans might be a good choice:</p>
						<ul className="list-unstyled text-sm-left">
							<li>Reduced fees</li>
							<li>Better access to loans for vets</li>
							<li>Access to larger loans amounts than are available through Fannie Mae/Freddy Mac</li>
							<li>100% financing available</li>
							<li>Eligibility can be reused/renewed</li>
							<li>Available even after a foreclosure or bankruptcy</li>
							<li>NO MI Requirements monthly</li>
						</ul>
					</div>

					<SideNav links={ [{linkName: 'Conventional Loans', linkAddress: '/conventional-loan'}, {linkName: 'FHA Loans', linkAddress: '/fha-loan'}] }/>

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