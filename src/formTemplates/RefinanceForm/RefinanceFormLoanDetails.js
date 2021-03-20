import React, { Component } from 'react';
import { Label, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';

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
						<AvField
							type="select" id="propertyType" className="form-control" name="propertyType"
							value={this.props.propertyType || ''} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="SFR">Single Family</option>
							<option value="townhome">Townhome</option>
							<option value="condo">Condo</option>
							<option value="muli-family">Multi-Family</option>
						</AvField>
					</div>

					<div className="form-group col-md-4">
						<Label htmlFor="currentLoanType"><strong>Current Loan Type</strong></Label>
						<AvField
							type="select" id="currentLoanType" className="form-control" name="currentLoanType"
							value={this.props.currentLoanType || ''} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="CONV">Conventional</option>
							<option value="FHA">FHA</option>
							<option value="VA">VA</option>
							<option value="USDA">USDA</option>
							<option value="PIF">Paid In Full</option>
						</AvField>
					</div>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="estimatedValue"><strong>Estimated Home Value</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="value-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="estimatedValue" name="estimatedValue" placeholder="600,500"
								type="text" className="form-control" maxlength="8" required
								value={this.props.estimatedValue || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>
				</div>

				<div className="form-row">
					<AvGroup className="form-group col-md-3">
						<Label htmlFor="yearPurchased"><strong>Year Purchased</strong></Label>
						<InputGroup>
							<AvInput
								id="yearPurchased" name="yearPurchased" placeholder="2015"
								type="text" className="form-control" maxlength="4" required
								value={this.props.yearPurchased || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="refinancedBefore" name="refinancedBefore"
						       checked={ this.props.refinancedBefore } onChange={ this.handleChange }/>
						<label className="form-check-label" htmlFor="refinancedBefore"><strong><u>Check If You've Refinanced Previously</u></strong></label>
					</div>

					{ this.props.refinancedBefore ? (
							<AvGroup className="form-group col-md-3">
								<Label htmlFor="dateOfLastRefi"><strong>Year Purchased</strong></Label>
								<InputGroup>
									<AvInput
										id="dateOfLastRefi" name="dateOfLastRefi" placeholder="2017"
										type="text" className="form-control" maxlength="4" required
										value={this.props.dateOfLastRefi || ''} onChange={ this.handleChange }/>
									<AvFeedback>Required Field</AvFeedback>
								</InputGroup>
							</AvGroup>
						) : (
							<div className="form-group col-md-3"></div>
						)
					}
				</div>

				<div className="form-row">
					<AvGroup className="form-group col-md-3">
						<Label htmlFor="originalLoanAmount"><strong>Orig. Loan Amount for { loanType }</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="amount-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="originalLoanAmount" name="originalLoanAmount" placeholder="505,000"
								type="text" className="form-control" maxlength="8" required
								value={this.props.originalLoanAmount || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="cashOut" name="cashOut" checked={ this.props.cashOut }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="cashOut"><strong><u>Check If You Want To Take Cash Out</u></strong></label>
					</div>

					{ this.props.cashOut ? (
							<AvGroup className="form-group col-md-3">
								<Label htmlFor="cashOutAmount"><strong>How Much Cash Do You Need?</strong></Label>
								<InputGroup>
									<InputGroupAddon addonType="prepend">
										<InputGroupText id="amount-addon">$</InputGroupText>
									</InputGroupAddon>
									<AvInput
										id="cashOutAmount" name="cashOutAmount" placeholder="25,000"
										type="text" className="form-control" maxlength="8" required
										value={this.props.cashOutAmount || ''} onChange={ this.handleChange }/>
									<AvFeedback>Required Field</AvFeedback>
								</InputGroup>
							</AvGroup>
						) : (
							<div className="form-group col-md-3"></div>
						)
					}
				</div>


				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="originalLoanTerm"><strong>Original Loan Term</strong></Label>
						<AvField
							type="select" id="originalLoanTerm" className="form-control" name="originalLoanTerm"
							value={this.props.originalLoanTerm} onChange={ this.handleChange }
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
			</div>
		);
	}
}