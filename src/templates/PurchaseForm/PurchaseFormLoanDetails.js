import React, { Component } from 'react';

export class PurchaseFormLoanDetails extends Component {
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
						<label htmlFor="purchaseStage"><strong>Current Stage of Purchase</strong></label>
						<select id="purchaseStage" className="form-control" name="purchaseStage"
						        value={this.props.purchaseStage} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="Signed Purchase Contract">Signed Purchase Contract</option>
							<option value="Offer Pending/Found Property">Offer Pending/Found Property</option>
							<option value="1-3 Months">Buying in 1-3 Months</option>
							<option value="4+ Months">Buying in 4+ Months</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="propertyType"><strong>Property Type</strong></label>
						<select id="propertyType" className="form-control" name="propertyType"
						        value={this.props.propertyType} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="SFR">Single Family</option>
							<option value="Townhome">Townhome</option>
							<option value="Condo">Condo</option>
							<option value="muli-family">Multi-Family</option>
						</select>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="propertyUse"><strong>Property Use</strong></label>
						<select id="propertyUse" className="form-control" name="propertyUse"
						        value={this.props.propertyUse} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="Primary Home">Primary Home</option>
							<option value="Secondary Home">Secondary Home</option>
							<option value="Rental Property">Rental Property</option>
						</select>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<label htmlFor="purchasePrice"><strong>Purchase Price</strong></label>
						<input type="number" className="form-control" id="purchasePrice" name="purchasePrice" placeholder="$305,000"
						       value={this.props.purchasePrice} onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="estimatedDownPayment"><strong>Estimated Down Payment</strong></label>
						<input type="number" className="form-control" id="estimatedDownPayment" name="estimatedDownPayment"
						       value={this.props.estimatedDownPayment} placeholder="$40,000" onChange={ this.handleChange } required/>
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="ratePreference"><strong>Rate Preference</strong></label>
						<select id="ratePreference" className="form-control" name="ratePreference"
						        value={this.props.ratePreference} onChange={ this.handleChange } required>
							<option value="choose">Choose...</option>
							<option value="Fixed">Fixed</option>
							<option value="Variable">Variable</option>
						</select>
					</div>
				</div>

				<div className="form-row">
					<div className="form-check form-check-inline mx-auto py-2">
						<input className="form-check-input" type="checkbox" id="firstTimeHomeBuyer" name="firstTimeHomeBuyer" checked={ this.props.firstTimeHomeBuyer }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="firstTimeHomeBuyer"><strong><u>Check If This Is Your First Purchase</u></strong></label>
					</div>
					<div className="form-check form-check-inline mx-auto py-2">
						<input className="form-check-input" type="checkbox" id="realEstateAgent" name="realEstateAgent" checked={ this.props.realEstateAgent }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="realEstateAgent"><strong><u>Check If Working With A Realtor?</u></strong></label>
					</div>
					<div className="form-check form-check-inline mx-auto py-2">
						<input className="form-check-input" type="checkbox" id="bankruptcyShortsaleForeclosure" name="bankruptcyShortsaleForeclosure" checked={ this.props.bankruptcyShortsaleForeclosure }
						       onChange={ this.handleChange }  />
						<label className="form-check-label" htmlFor="bankruptcyShortsaleForeclosure"><strong><u>Check For Bankruptcy/Foreclosure/Short Sale in Last 3yrs?</u></strong></label>
					</div>

				</div>
			</div>
		);
	}
}