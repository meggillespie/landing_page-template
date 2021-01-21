import React, { Component } from 'react';

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
						<label htmlFor="propertyType"><strong>Property Type</strong></label>
						<select id="propertyType" className="form-control" name="propertyType"
						        value={this.props.propertyType} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="SFR">Single Family</option>
							<option value="townhome">Townhome</option>
							<option value="condo">Condo</option>
							<option value="muli-family">Multi-Family</option>
							<option value="manufactured">Manufactured</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="currentLoanType"><strong>Current Loan Type</strong></label>
						<select id="currentLoanType" className="form-control" name="currentLoanType"
						        value={this.props.currentLoanType} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="CONV">Conventional</option>
							<option value="FHA">FHA</option>
							<option value="VA">VA</option>
							<option value="USDA">USDA</option>
							<option value="PIF">Paid In Full</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="estimatedValue"><strong>Estimated Home Value</strong></label>
						<input type="number" className="form-control" id="estimatedValue" name="estimatedValue"
						       value={this.props.estimatedValue} placeholder="$350,000" onChange={ this.handleChange } required/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-3">
						<label htmlFor="yearPurchased"><strong>Year Purchased</strong></label>
						<input type="number" className="form-control" id="yearPurchased" name="yearPurchased" placeholder="1999"
						       value={this.props.yearPurchased} onChange={ this.handleChange } required />
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="refinancedBefore" name="refinancedBefore"
						       checked={ this.props.refinancedBefore } onChange={ this.handleChange } />
						<label className="form-check-label" htmlFor="refinancedBefore"><strong><u>Check If You've Refinanced Previously</u></strong></label>
					</div>

					{ this.props.refinancedBefore ? (
							<div className="form-group col-md-3">
								<label htmlFor="dateOfLastRefi"><strong>Year Refinanced</strong></label>
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
						<label htmlFor="originalLoanAmount"><strong>{ loanType } Loan Amount</strong></label>
						<input type="number" className="form-control" id="originalLoanAmount" name="originalLoanAmount" placeholder="$305,000"
						       value={this.props.originalLoanAmount} onChange={ this.handleChange } required/>
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="cashOut" name="cashOut" checked={ this.props.cashOut }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="cashOut"><strong><u>Check If You Want To Take Cash Out</u></strong></label>
					</div>

					{ this.props.cashOut ? (
							<div className="form-group col-md-3">
								<label htmlFor="cashOutAmount"><strong>Cash Out Amount</strong></label>
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