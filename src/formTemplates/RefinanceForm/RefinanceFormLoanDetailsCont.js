import React, { Component } from 'react';
import { Label, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';

export class RefinanceFormLoanDetailsCont extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e);
	}

	render () {
		return(
			<div>
				<div className="form-row">
					<AvGroup className="form-group col-md-4">
						<Label htmlFor="currentRate"><strong>Current Interest Rate</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="rate-addon">%</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="currentRate" name="currentRate" placeholder="3.125"
								type="text" className="form-control" maxlength="5" required
								value={this.props.currentRate || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="mortgageBalance"><strong>Current Mortgage Balance</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="mortgaged-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="mortgageBalance" name="mortgageBalance" placeholder="450,500"
								type="text" className="form-control" maxlength="8" required
								value={this.props.mortgageBalance || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="secondMortgage"><strong>Second Mortgage Balance</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="second-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="secondMortgage" name="secondMortgage" placeholder="0"
								type="text" className="form-control" maxlength="8" required
								value={this.props.secondMortgage || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>
				</div>

				<div className="form-row">
					<AvGroup className="form-group col-md-4">
						<Label htmlFor="monthlyPI"><strong>Monthly Principal + Interest</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="payment-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="monthlyPI" name="monthlyPI" placeholder="2,700"
								type="text" className="form-control" maxlength="8" required
								value={this.props.monthlyPI || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="hoi"><strong>Monthly Homeowner's Insr.</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="hoi-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="hoi" name="hoi" placeholder="150"
								type="text" className="form-control" maxlength="6" required
								value={this.props.hoi || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="tax"><strong>Annual Property Tax</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="tax-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="tax" name="tax" placeholder="6,500"
								type="text" className="form-control" maxlength="6" required
								value={this.props.tax || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="refiLoanTerm"><strong>Preferred Loan Term</strong></Label>
						<AvField
							type="select" id="refiLoanTerm" className="form-control" name="refiLoanTerm"
							value={this.props.refiLoanTerm} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="30">30 Year</option>
							<option value="25">25 Year</option>
							<option value="20">20 Year</option>
							<option value="15">15 Year</option>
							<option value="10">10 Year</option>
						</AvField>
					</div>
				</div>

				<div className="form-row">
					<div className="form-check form-check-inline mx-auto my-4">
						<input className="form-check-input" type="checkbox" id="currentEscrow" name="currentEscrow"
						       checked={ this.props.currentEscrow } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="currentEscrow"><strong><u>Check If You're Currently Escrowing</u></strong></label>
					</div>
					<div className="form-check form-check-inline mx-auto my-4">
						<input className="form-check-input" type="checkbox" id="escrowFwd" name="escrowFwd"
						       checked={ this.props.escrowFwd } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="escrowFwd"><strong><u>Check If Want To Escrow Moving Forward</u></strong></label>
					</div>
				</div>

				<div className="form-row">
					<div className="form-check form-check-inline mx-auto my-4">
						<input className="form-check-input" type="checkbox" id="bankruptcyShortsaleForeclosure" name="bankruptcyShortsaleForeclosure"
						       checked={ this.props.bankruptcyShortsaleForeclosure } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="bankruptcyShortsaleForeclosure"><strong><u>Check For Bankruptcy/Foreclosure/Short Sale in Last 3yrs?</u></strong></label>
					</div>
					<div className="form-check form-check-inline mx-auto my-4">
						<input className="form-check-input" type="checkbox" id="lateMortgagePayments" name="lateMortgagePayments"
						       checked={ this.props.lateMortgagePayments } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="lateMortgagePayments"><strong><u>Check If You Have Any Late Mortgage Payments</u></strong></label>
					</div>
				</div>
			</div>
		);
	}
}