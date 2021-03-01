import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';

export class RefinanceFormLoanDetails extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.props.onChange(e);
	}

	render () {
		let	loanType = this.props.refinancedBefore ? 'Refinance' : 'Purchase';

		return(
			<div>
				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="propertyType"><strong>Property Type</strong></Label>
						<AvField type="select" id="propertyType" className="form-control" name="propertyType"
						         value={this.props.propertyType} onChange={ this.handleChange } required>
							<option value="">Choose...</option>
							<option value="SFR">Single Family</option>
							<option value="townhome">Townhome</option>
							<option value="condo">Condo</option>
							<option value="muli-family">Multi-Family</option>
						</AvField>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="currentLoanType"><strong>Current Loan Type</strong></Label>
						<AvField type="select" id="currentLoanType" className="form-control" name="currentLoanType"
						         value={this.props.currentLoanType} onChange={ this.handleChange } required>
							<option value="">Choose...</option>
							<option value="CONV">Conventional</option>
							<option value="FHA">FHA</option>
							<option value="VA">VA</option>
							<option value="USDA">USDA</option>
							<option value="PIF">Paid In Full</option>
						</AvField>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="estimatedValue"><strong>Estimated Home Value</strong></Label>
						<AvField type="number" className="form-control" id="estimatedValue" name="estimatedValue"
						         value={this.props.estimatedValue} placeholder="$350,000" onChange={ this.handleChange } required/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-3">
						<Label htmlFor="yearPurchased"><strong>Year Purchased</strong></Label>
						<AvField type="number" className="form-control" id="yearPurchased" name="yearPurchased" placeholder="1999"
						         value={this.props.yearPurchased} onChange={ this.handleChange } required/>
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="refinancedBefore" name="refinancedBefore"
						       checked={ this.props.refinancedBefore } onChange={ this.handleChange }/>
						<label className="form-check-label" htmlFor="refinancedBefore"><strong><u>Check If You've Refinanced Previously</u></strong></label>
					</div>

					{ this.props.refinancedBefore ? (
							<div className="form-group col-md-3">
								<label htmlFor="dateOfLastRefi"><strong>Year of Last Refinance</strong></label>
								<input type="number" className="form-control" id="dateOfLastRefi" name="dateOfLastRefi" placeholder="2005"
								       value={this.props.dateOfLastRefi} onChange={ this.handleChange } required/>
							</div>
						) : (
							<div className="form-group col-md-3"></div>
						)
					}
				</div>

				<div className="form-row">
					<div className="form-group col-md-3">
						<Label htmlFor="originalLoanAmount"><strong>Orig. Loan Amount for { loanType }</strong></Label>
						<AvField type="number" className="form-control" id="originalLoanAmount" name="originalLoanAmount" placeholder="$305,000"
						         value={this.props.originalLoanAmount} onChange={ this.handleChange } required/>
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="cashOut" name="cashOut" checked={ this.props.cashOut }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="cashOut"><strong><u>Check If You Want To Take Cash Out</u></strong></label>
					</div>

					{ this.props.cashOut ? (
							<div className="form-group col-md-3">
								<label htmlFor="cashOutAmount"><strong>How Much Cash Do You Need?</strong></label>
								<input type="number" className="form-control" id="cashOutAmount" name="cashOutAmount" placeholder="$25,000"
								       value={this.props.cashOutAmount} onChange={ this.handleChange } required/>
							</div>
						) : (
							<div className="form-group col-md-3"></div>
						)
					}
				</div>
			</div>
		);
	}
}