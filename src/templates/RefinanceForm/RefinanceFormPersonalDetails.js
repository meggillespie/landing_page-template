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
					<label htmlFor="inputName">Name</label>
					<input type="name" className="form-control" id="inputName" name="name" placeholder="Name" onChange={ this.handleChange }  required/>
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="inputEmail">Email</label>
					<input type="email" className="form-control" id="inputEmail" name="email" placeholder="Email" onChange={ this.handleChange } />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<label htmlFor="inputPhone">Phone Number</label>
					<input type="tel" className="form-control" id="inputPhone" name="phone" placeholder="512-555-1234" onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="zipcode">Zipcode</label>
					<input type="number" className="form-control" id="zipcode" name="zipcode" placeholder="78738" onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="creditScore">FICO Score</label>
					<input type="number" className="form-control" id="creditScore" name="creditScore" placeholder="710" onChange={ this.handleChange } />
				</div>
			</div>

			<div className="form-row">
				<div className="form-group col-md-4">
					<label htmlFor="employmentStatus">Employment Status</label>
					<select id="employmentStatus" className="form-control" name="employmentStatus">
						<option selected>Choose...</option>
						<option>Salaried</option>
						<option>Commission</option>
						<option>Self-Employed</option>
						<option>Retired</option>
						<option>Other</option>
					</select>
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="monthlyIncome">Gross Monthly Income</label>
					<input type="number" className="form-control" id="monthlyIncome" name="monthlyIncome" placeholder="$6,250" onChange={ this.handleChange } />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="expenses">Monthly Credit Expenses</label>
					<input type="number" className="form-control" id="expenses" name="expenses" placeholder="$1,150" onChange={ this.handleChange } />
				</div>
			</div>

		</div>
		);
	}
}