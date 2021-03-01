import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { AvField } from 'availity-reactstrap-validation';
// import { useForm } from 'react-hook-form';



export class RefinanceFormPersonalDetails extends Component {
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
				<div className="form-group col-md-6">
					<Label htmlFor="inputName"><strong>Name</strong></Label>
					<AvField type="name" className="form-control" id="inputName" name="name" placeholder="Name"
					         value={this.props.name} onChange={ this.handleChange } required/>
				</div>
				<div className="form-group col-md-6">
					<Label htmlFor="inputEmail"><strong>Email</strong></Label>
					<AvField type="email" className="form-control" id="inputEmail" name="email" placeholder="Email"
					         value={this.props.email} onChange={ this.handleChange } required />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<Label htmlFor="inputPhone"><strong>Phone Number</strong></Label>
					<AvField type="number" className="form-control" id="inputPhone" name="phone" placeholder="5125551234"
					         value={this.props.phone} onChange={ this.handleChange } required/>
				</div>
				<div className="form-group col-md-4">
					<Label htmlFor="zipcode"><strong>Zipcode</strong></Label>
					<AvField type="number" className="form-control" id="zipcode" name="zipcode" placeholder="78738"
					         value={this.props.zipcode} onChange={ this.handleChange } required/>
				</div>
				<div className="form-group col-md-4">
					<Label htmlFor="creditScore"><strong>FICO Score</strong></Label>
					<AvField type="select" id="creditScore" className="form-control" name="creditScore"
					         value={this.props.creditScore} onChange={ this.handleChange } required
					         helpMessage="Best Estimate.">
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
					<AvField type="select" id="employmentStatus" className="form-control" name="employmentStatus"
					         value={this.props.employmentStatus} onChange={ this.handleChange } required>>
						<option value="">Choose...</option>
						<option value="salary">Salaried</option>
						<option value="commission">Commission</option>
						<option value="self-employed">Self-Employed</option>
						<option value="retired">Retired</option>
						<option value="other">Other</option>
					</AvField>
				</div>
				<div className="form-group col-md-4">
					<Label htmlFor="monthlyIncome"><strong>Gross Monthly Income</strong></Label>
					<AvField type="number" className="form-control" id="monthlyIncome" name="monthlyIncome" placeholder="$6,250"
					         value={this.props.monthlyIncome} onChange={ this.handleChange } required/>
				</div>
				<div className="form-group col-md-4">
					<Label htmlFor="monthlyExpenses"><strong>Minimum Monthly Debt Payments</strong></Label>
					<AvField type="number" className="form-control" id="monthlyExpenses" name="monthlyExpenses" placeholder="$1,150"
					         value={this.props.monthlyExpenses} onChange={ this.handleChange } required/>
				</div>
			</div>
		</div>
		);
	}
}