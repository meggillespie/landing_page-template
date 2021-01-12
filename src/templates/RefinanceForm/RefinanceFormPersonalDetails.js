import React, { Component } from 'react';

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
					<label htmlFor="inputName"><strong>Name</strong></label>
					<input type="name" className="form-control" id="inputName" name="name" placeholder="Name"
					       onChange={ this.handleChange }  required/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="inputEmail"><strong>Email</strong></label>
					<input type="email" className="form-control" id="inputEmail" name="email" placeholder="Email"
					       onChange={ this.handleChange } />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<label htmlFor="inputPhone"><strong>Phone Number</strong></label>
					<input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="512-555-1234"
					       onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="zipcode"><strong>Zipcode</strong></label>
					<input type="number" className="form-control" id="zipcode" name="zipcode" placeholder="78738"
					       onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="creditScore"><strong>FICO Score</strong></label>
					<input type="number" className="form-control" id="creditScore" name="creditScore" placeholder="670"
					       onChange={ this.handleChange } />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<label htmlFor="employmentStatus"><strong>Employment Status</strong></label>
					<select id="employmentStatus" className="form-control" name="employmentStatus"
					        value={this.props.employmentStatus} onChange={ this.handleChange } >
						<option value="choose">Choose...</option>
						<option value="salary">Salaried</option>
						<option value="commission">Commission</option>
						<option value="self-employ">Self-Employed</option>
						<option value="retired">Retired</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="monthlyIncome"><strong>Gross Monthly Income</strong></label>
					<input type="number" className="form-control" id="monthlyIncome" name="monthlyIncome" placeholder="$6,250"
					       onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="expenses"><strong>Monthly Credit Expenses</strong></label>
					<input type="number" className="form-control" id="expenses" name="expenses" placeholder="$1,150"
					       onChange={ this.handleChange } />
				</div>
			</div>
		</div>
		);
	}
}