import React, { Component } from 'react';

export class RefinanceFormPropertyDetails extends Component {
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
						<label htmlFor="inputEmail4">Email</label>
						<input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
					</div>
					<div className="form-group col-md-6">
						<label htmlFor="inputFirstName">FirstName</label>
						<input type="text" className="form-control" id="inputFirstName" placeholder="firstname" name="firstname" onChange={this.handleChange} />
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
				</div>
				<div className="form-group">
					<label htmlFor="inputAddress2">Address 2</label>
					<input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
				</div>
				<div className="form-row">
					<div className="form-group col-md-6">
						<label htmlFor="inputCity">City</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="inputState">State</label>
						<select id="inputState" className="form-control">
							<option selected>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="inputZip">Zip</label>
						<input type="text" className="form-control" id="inputZip" />
					</div>
				</div>

				<div className="form-group">
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
						<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
					</div>
				</div>
				{/*<button className="btn btn-primary float-right">Submit</button>*/}


				<div className="row">
					<div className="col-md-10 offset-md-1" style={{ marginTop: '25vh'}} >
						<div className="row mb-5 mt-5">
							<div className="col-md-8 offset-md-2">
							</div>
						</div>
					</div>
				</div>


			</div>
		);
	}
}