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
						<label htmlFor="propertyType">Property Type</label>
						<select id="propertyType" className="form-control" name="propertyType">
							<option selected>Choose...</option>
							<option>Single Family</option>
							<option>Townhome</option>
							<option>Condo</option>
							<option>Multi-Family</option>
							<option>Manufactured</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="propertyType">Current Loan Type</label>
						<select id="propertyType" className="form-control" name="propertyType">
							<option selected>Choose...</option>
							<option>Conventional</option>
							<option>FHA</option>
							<option>VA</option>
							<option>USDA</option>
							<option>Paid In Full</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="estimatedValue">Estimated Home Value</label>
						<input type="number" className="form-control" id="estimatedValue" name="estimatedValue" placeholder="$350,000" />
					</div>
				</div>


				<div className="form-row">
					<div className="form-group col-md-3">
						<label htmlFor="yearPurchased">Year Purchased</label>
						<input type="number" className="form-control" id="yearPurchased" name="yearPurchased" placeholder="1999" onChange={ this.handleChange } required/>
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="refinancedBefore" name="refinancedBefore" checked={ this.props.refinancedBefore } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="refinancedBefore">Check If You've Refinanced Previously</label>
					</div>

					{ this.props.refinancedBefore ? (
							<div className="form-group col-md-3">
								<label htmlFor="dateOfLastRefi">Year Refinanced</label>
								<input type="number" className="form-control" id="dateOfLastRefi" name="dateOfLastRefi" placeholder="2005" onChange={ this.handleChange } required/>
							</div>
						) : (
							<div className="form-group col-md-3"></div>
						)
					}
				</div>

				<div className="form-row">
					<div className="form-group col-md-3">
						<label htmlFor="originalLoanAmount">{loanType} Loan Amount</label>
						<input type="number" className="form-control" id="originalLoanAmount" name="originalLoanAmount" placeholder="$305,000" onChange={ this.handleChange } required/>
					</div>

					<div className="form-check form-check-inline mx-auto">
						<input className="form-check-input" type="checkbox" id="cashOut" name="cashOut" checked={ this.props.cashOut } onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="cashOut">Check This If You Want To Take Cash Out</label>
					</div>

					{ this.props.cashOut ? (
							<div className="form-group col-md-3">
								<label htmlFor="cashOutAmount">Cash Out Amount</label>
								<input type="number" className="form-control" id="cashOutAmount" name="cashOutAmount" placeholder="$25,000" onChange={ this.handleChange } required/>
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