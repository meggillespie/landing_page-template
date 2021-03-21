import React, { Component } from 'react';
import { Label, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import InfoIcon from '../../components/InfoIcon/InfoIcon';

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
						<Label htmlFor="purchaseStage"><strong>Current Stage of Purchase</strong></Label>
						<AvField
							type="select" id="purchaseStage" className="form-control" name="purchaseStage"
							value={this.props.purchaseStage} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="Signed Purchase Contract">Signed Purchase Contract</option>
							<option value="Offer Pending/Found Property">Offer Pending/Found Property</option>
							<option value="1-3 Months">Buying in 1-3 Months</option>
							<option value="4+ Months">Buying in 4+ Months</option>
						</AvField>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="propertyType"><strong>Property Type</strong></Label>
						<AvField
							type="select" id="propertyType" className="form-control" name="propertyType"
							value={this.props.propertyType} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="SFR">Single Family</option>
							<option value="Townhome">Townhome</option>
							<option value="Condo">Condo</option>
							<option value="muli-family">Multi-Family</option>
						</AvField>
					</div>
					<div className="form-group col-md-4">
						<Label htmlFor="propertyUse"><strong>Property Use</strong></Label>
						<AvField
							type="select" id="propertyUse" className="form-control" name="propertyUse"
							value={this.props.propertyUse} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="Primary Home">Primary Home</option>
							<option value="Secondary Home">Secondary Home</option>
							<option value="Rental Property">Rental Property</option>
						</AvField>
					</div>
				</div>

				<div className="form-row">
					<AvGroup className="form-group col-md-4">
						<Label htmlFor="purchasePrice"><strong>Purchase Price</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="purchase-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="purchasePrice" name="purchasePrice" placeholder="550,000"
								type="text" className="form-control" maxlength="8" required
								value={this.props.purchasePrice || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="estimatedDownPayment"><strong>Down Payment</strong></Label>
						<InfoIcon id="down" text="Max amount of money you will put down on purhcase." />
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="estimated-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="estimatedDownPayment" name="estimatedDownPayment" placeholder="55,000"
								type="text" className="form-control" maxlength="8" required
								value={this.props.estimatedDownPayment || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<div className="form-group col-md-4">
						<Label htmlFor="purchaseLoanTerm"><strong>Preferred Loan Term</strong></Label>
						<AvField
							type="select" id="purchaseLoanTerm" className="form-control" name="purchaseLoanTerm"
							value={this.props.purchaseLoanTerm} onChange={ this.handleChange }
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