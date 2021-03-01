import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

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
					<div className="form-group col-md-4">
						<Label htmlFor="currentRate"><strong>Current Interest Rate</strong></Label>
						<AvField type="number" className="form-control" id="currentRate" name="currentRate" placeholder="4.5"
						         value={this.props.currentRate} onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="mortgageBalance"><strong>Mortgage Balance</strong></Label>
						<AvField type="number" className="form-control" id="mortgageBalance" name="mortgageBalance" placeholder="$250,000"
						         value={this.props.mortgageBalance} onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="secondMortgage"><strong>Second Mortgage Balance</strong></Label>
						<AvField type="number" className="form-control" id="secondMortgage" name="secondMortgage" placeholder="$0"
						         value={this.props.secondMortgage} onChange={ this.handleChange } />
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="monthlyPI"><strong>Monthly Principal + Interest</strong></Label>
						<AvField type="number" className="form-control" id="monthlyPI" name="monthlyPI" placeholder="$2,700"
						         value={this.props.monthlyPI} onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="hoi"><strong>Monthly Homeowner's Insr.</strong></Label>
						<AvField type="number" className="form-control" id="hoi" name="hoi" placeholder="$125"
						          value={this.props.hoi} onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="tax"><strong>Annual Property Tax</strong></Label>
						<AvField type="number" className="form-control" id="tax" name="tax" placeholder="$6,000"
						         value={this.props.tax} onChange={ this.handleChange } required/>
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
						<input className="form-check-input" type="checkbox" id="foreclosure" name="foreclosure"
						       checked={ this.props.foreclosure } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="foreclosure"><strong><u>Check If You've Foreclosed Since 2018</u></strong></label>
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