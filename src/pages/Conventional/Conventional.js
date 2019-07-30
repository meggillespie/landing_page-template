import React, { Component } from 'react';
import { JumboFooterHeader } from '../../components/JumboFooterHeader/JumboFooterHeader';
import {SideNav} from "../../components/SideNav/SideNav";

export class Conventional extends Component {
	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light"  style={{  paddingTop: '100px', textDecoration: 'none' }}>
					<div className="container">
						<h2 className="display-4 pt-5">Conventional Loans</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-1">
						<div className="row">
							<div className="col-md-12 text-left pt-5 buffer-content lead">
								<h3>What Are Conventional Loans?</h3>
								<p className="pt-3">
									Conventional loans are mortgages that aren’t secured by a government agency such as the
									<a href="/fha-loan" className="text-dark" > FHA</a>,
									<a href="/veterans-loan" className="text-dark" >VA</a>, or the RHS.
									Conventional loans usually have fixed rates and terms.
									Conventional loans are the most common type of mortgage.
								</p>

								<h5 className="pt-3">They are an option when:</h5>
								<ul className="list-unstyled">
									<li>You have good or excellent credit</li>
									<li>You have at least 3% of your own funds available for down payment</li>
									<li>You have a “non-purchasing spouse” in community property states</li>
								</ul>

								<h5 className="pt-3">Conventional loans include:</h5>
								<ul className="list-unstyled">
									<li>Variable & fixed rate options – variable rate loan payments adjust to market interest rates,
										whereas fixed rate loans lock in an interest rate and make planning easier because the principal
										and interest of your loan will not change.
									</li>
									<li>Conforming loans – these conform to guidelines set by Fannie Mae and Freddie Mac, two
										government-sponsored agencies that purchase loans for resale to investors.
									</li>
									<li>Jumbo loans – larger sized loans for more expensive properties. Read about jumbo loans here.
									</li>
									<li>Portfolio loans – conventional loans owned by mortgage lenders, as opposed to those sold to
										investors. They often include unique features that set the apart from other mortgages.
									</li>
								</ul>

								<h3 className="pt-4">Conventional Loans VS FHA & VA Loans</h3>
								<p className="pt-3">
									As stated above, conventional loans are distinct from government-backed loans, such as those insured
									by the FHA and VA. Government-backed loans are less risky to investors and are therefore generally
									less costly to the borrower. <a href="/fha-loans" className="text-dark">Read more about FHA and VA loans here.</a>
								</p>

								<h3 className="pt-4">Are You Ready To Apply For A Home Loan?</h3>
								<p className="pt-3">
									Want to learn more? Or are you ready to apply for a loan? You can apply online now through our WBM
									ApplicationTM or contact us to speak with a friendly loan officer. We’re happy to help!
								</p>
							</div>
						</div>
					</div>

					<div className="col-md-3 text-left buffer-content">
						<h5 className="pt-5">CONVENTIONAL LOAN TYPES</h5>
						<p className="text-sm-left py-3">There are several conventional loans to meet your needs:</p>
						<ul className="list-unstyled text-sm-left">
							<li>Fifteen-year and thirty-year fixed rate mortgage</li>
							<li>Adjustable rate mortgages (ARM)</li>
							<li>Hybrid ARM (3/1 ARM, 5/1 ARM, 7/1 ARM)</li>
							<li>Annual ARM</li>
						</ul>
					</div>

					<SideNav links={ [{linkName: 'VA Loans', linkAddress: '/veterans-loan'}, {linkName: 'FHA Loans', linkAddress: '/fha-loan'}] }/>
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