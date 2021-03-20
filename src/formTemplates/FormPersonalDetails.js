import React, { Component } from 'react';
import { Label, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { AvGroup, AvField, AvInput, AvFeedback } from 'availity-reactstrap-validation';

export class FormPersonalDetails extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		// this.onlyNumberKey = this.onlyNumberKey.bind(this)
	}

	handleChange(e) {
		this.props.onChange(e);
	}

	// onlyNumberKey(evt) {
	//
	// 	let ASCIICode = (evt.which) ? evt.which : evt.keyCode;
	// 	if ( ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) ) {
	// 		return false;
	//
	// 	} else {
	// 		return true;
	// 	}
	//
	// }

	render () {
		return(
			<div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<Label htmlFor="inputName"><strong>Name</strong></Label>
						<AvField
							type="name" className="form-control" id="inputName" name="name" placeholder="Name"
							value={this.props.name || ''} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						/>
					</div>
					<div className="form-group col-md-6">
						<Label htmlFor="inputEmail"><strong>Email</strong></Label>
						<AvField
							type="email" className="form-control" id="inputEmail" name="email" placeholder="Email"
							value={this.props.email || ''} onChange={ this.handleChange }
		          validate={{
			          required: {value: true, errorMessage: 'Required Field'}
		          }}
						/>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="inputPhone"><strong>Phone Number</strong></Label>
						<AvField
							type="text" className="form-control" id="inputPhone" name="phone" placeholder="(512) 555-1234"
		          value={this.props.phone || ''} onChange={ this.handleChange } maxlength="14"
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						/>
					</div>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="zipcode"><strong>Zipcode</strong></Label>
						<InputGroup>
							<AvInput
								type="text" className="form-control" id="zipcode" name="zipcode" placeholder="78738"
								value={this.props.zipcode || ''} onChange={ this.handleChange } maxlength="5" required
							/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<div className="form-group col-md-4">
						<Label htmlFor="creditScore"><strong>FICO Score</strong></Label>
						<AvField
							type="select" id="creditScore" className="form-control" name="creditScore"
							value={this.props.creditScore || ''} onChange={ this.handleChange } helpMessage="Best Estimate"
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="Excellent (720+)">Excellent (720+)</option>
							<option value="Good (680 - 719)">Good (680 - 719)</option>
							<option value="Fair (640 - 680)">Fair (640 - 679)</option>
							<option value="Under 640">Under 640</option>
						</AvField>
					</div>
				</div>

				<div className="form-row">
					<div className="form-group col-md-4">
						<Label htmlFor="employmentStatus"><strong>Employment Status</strong></Label>
						<AvField
							type="select" id="employmentStatus" className="form-control" name="employmentStatus"
							value={this.props.employmentStatus} onChange={ this.handleChange }
							validate={{
								required: {value: true, errorMessage: 'Required Field'}
							}}
						>
							<option value="">Choose...</option>
							<option value="salary">Salaried</option>
							<option value="commission">Commission</option>
							<option value="self-employed">Self-Employed</option>
							<option value="retired">Retired</option>
							<option value="other">Other</option>
						</AvField>
					</div>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="monthlyIncome"><strong>Gross Monthly Income</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="income-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="monthlyIncome" name="monthlyIncome" placeholder="7,250"
								type="text" className="form-control" maxlength="8" required
								value={this.props.monthlyIncome || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

					<AvGroup className="form-group col-md-4">
						<Label htmlFor="monthlyExpenses"><strong>Minimum Monthly Debt Payments</strong></Label>
						<InputGroup>
							<InputGroupAddon addonType="prepend">
								<InputGroupText id="expense-addon">$</InputGroupText>
							</InputGroupAddon>
							<AvInput
								id="monthlyExpenses" name="monthlyExpenses" placeholder="750"
								type="text" className="form-control" maxlength="8" required
								// onkeypress={ this.onlyNumberKey }
								value={this.props.monthlyExpenses || ''} onChange={ this.handleChange }/>
							<AvFeedback>Required Field</AvFeedback>
						</InputGroup>
					</AvGroup>

				</div>
			</div>
		);
	}
}