import React, { Component } from 'react';
import { Card, CardBody, Collapse, Button } from 'reactstrap';

export class Calculators extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseOne: false,
			collapseTwo: false,
			collapseThree: false
		};


		this.toggleOne = this.toggleOne.bind(this);
		this.toggleTwo = this.toggleTwo.bind(this);
		this.toggleThree = this.toggleThree.bind(this);
		this.calculate = this.calculate.bind(this);
		this.round = this.round.bind(this);
	}

	toggleOne() {
		this.setState(state => ({ collapseOne: !state.collapseOne }));
	}
	toggleTwo() {
		this.setState(state => ({ collapseTwo: !state.collapseTwo }));
	}
	toggleThree() {
		this.setState(state => ({ collapseThree: !state.collapseThree }));
	}

	calculate(val) {
		console.log(val);

		// Get the user's input from the form. Assume it is all valid.
		// Convert interest from a percentage to a decimal, and convert from
		// an annual rate to a monthly rate. Convert payment period in years
		// to the number of monthly payments.
		let principal = document.loandata.principal.value;
		let interest = document.loandata.interest.value / 100 / 12;
		let payments = document.loandata.years.value * 12;

		// Now compute the monthly payment figure, using esoteric math.
		let x = Math.pow(1 + interest, payments);
		let monthly = (principal * x * interest)/(x-1);

		// Check that the result is a finite number. If so, display the results.
		if (!isNaN(monthly) &&
			(monthly !== Number.POSITIVE_INFINITY) &&
			(monthly !== Number.NEGATIVE_INFINITY)) {

			document.loandata.payment.value = this.round(monthly);
			document.loandata.total.value = this.round(monthly * payments);
			document.loandata.totalInterest.value = this.round((monthly * payments) - principal);
		}
		// Otherwise, the user's input was probably invalid, so don't display anything.
		else {
			document.loandata.payment.value = "";
			document.loandata.total.value = "";
			document.loandata.totalInterest.value = "";
		}
	}

	// This simple method rounds a number to two decimal places.
	round(x) {
		return Math.round( x * 100 ) / 100;
	}


	render () {
		return(
			<div>
				<div className="jumbotron jumbotron-fluid mb-0 bg-light " style={{ paddingTop: '100px'}}>
					<div className="container">
						<h2 className="display-4 pt-5">Mortgage Calculators</h2>
						<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>

				<section className="my-5">
					<div className="container">

						<div className="row">
							<div className="col-md-12 mx-auto">
								<hr className="mt-2 mb-5" />

								<div className="row">
									<div className="col-md-4 py-3">
										<Button color="primary" onClick={this.toggleOne} style={{ marginBottom: '1rem' }}>Calculate Monthly Payment</Button>

										<Collapse isOpen={this.state.collapseOne}>
											<Card>
												<CardBody>
													<form name="loanData">
														<div className="form-row">
															<h6 className="lead text-uppercase">Loan Information</h6>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanAmount" className="col-sm-6 col-form-label ">Loan Amount</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanAmount" placeholder="$250,000"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="apr" className="col-sm-6 col-form-label">APR</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="apr" placeholder="3.5"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanTerms" className="col-sm-6 col-form-label">Loan Term</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanTerms" placeholder="30"/>
															</div>
														</div>

														<div className="form-row my-3">
															<div className="col-sm-6 offset-sm-6">
																<button type="button" className="btn btn-primary btn-sm btn-block" onClick={ this.calculate }>Compute</button>
															</div>
														</div>

														<hr className="py-3" />

														<div className="form-row">
															<h6 className="lead text-uppercase">Payment Information</h6>
														</div>

														<div className="form-row my-3">
															<label htmlFor="monthlyPayment" className="col-sm-6 col-form-label">Monthly Payment</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" disabled={true} id="monthlyPayment" placeholder="30"/>
															</div>
														</div>
													</form>
												</CardBody>
											</Card>
										</Collapse>
									</div>

									<div className="col-md-4 py-3">
										<Button color="primary" onClick={this.toggleTwo} style={{ marginBottom: '1rem' }}>Affordablity Calculator</Button>

										<Collapse isOpen={this.state.collapseTwo}>
											<Card>
												<CardBody>
													<form name="loanData">
														<div className="form-row">
															<h6 className="lead text-uppercase">Loan Information</h6>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanAmount" className="col-sm-6 col-form-label ">Loan Amount</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanAmount" placeholder="$250,000"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="apr" className="col-sm-6 col-form-label">APR</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="apr" placeholder="3.5"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanTerms" className="col-sm-6 col-form-label">Loan Term</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanTerms" placeholder="30"/>
															</div>
														</div>

														<div className="form-row my-3">
															<div className="col-sm-6 offset-sm-6">
																<button type="button" className="btn btn-primary btn-sm btn-block" onClick={ this.calculate }>Compute</button>
															</div>
														</div>

														<hr className="py-3" />

														<div className="form-row">
															<h6 className="lead text-uppercase">Payment Information</h6>
														</div>

														<div className="form-row my-3">
															<label htmlFor="monthlyPayment" className="col-sm-6 col-form-label">Monthly Payment</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" disabled={true} id="monthlyPayment" placeholder="30"/>
															</div>
														</div>
													</form>
												</CardBody>
											</Card>
										</Collapse>
									</div>

									<div className="col-md-4 py-3">
										<Button color="primary" onClick={this.toggleThree} style={{ marginBottom: '1rem' }}>Refinance Calculator</Button>

										<Collapse isOpen={this.state.collapseThree}>
											<Card>
												<CardBody>
													<form name="loanData">
														<div className="form-row">
															<h6 className="lead text-uppercase">Loan Information</h6>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanAmount" className="col-sm-6 col-form-label ">Loan Amount</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanAmount" placeholder="$250,000"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="apr" className="col-sm-6 col-form-label">APR</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="apr" placeholder="3.5"/>
															</div>
														</div>
														<div className="form-row my-3">
															<label htmlFor="loanTerms" className="col-sm-6 col-form-label">Loan Term</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" id="loanTerms" placeholder="30"/>
															</div>
														</div>

														<div className="form-row my-3">
															<div className="col-sm-6 offset-sm-6">
																<button type="button" className="btn btn-primary btn-sm btn-block" onClick={ this.calculate }>Compute</button>
															</div>
														</div>

														<hr className="py-3" />

														<div className="form-row">
															<h6 className="lead text-uppercase">Payment Information</h6>
														</div>

														<div className="form-row my-3">
															<label htmlFor="monthlyPayment" className="col-sm-6 col-form-label">Monthly Payment</label>
															<div className="col-sm-6">
																<input type="number" className="form-control" disabled={true} id="monthlyPayment" placeholder="30"/>
															</div>
														</div>
													</form>
												</CardBody>
											</Card>
										</Collapse>
									</div>
								</div>

								<hr className="mt-2 mb-5" />
							</div>
						</div>

					</div>
				</section>
			</div>
		);
	}
}