import React, { Component } from 'react';

export class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 'Home Purchase'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState( {value: e.target.value} );
	}

	render () {
		return(
			<form className="p-5">

				<div className="form-group text-left">
					<label htmlFor="defaultContactFormName">Name</label>
					<input type="text" id="defaultContactFormName" className="form-control" placeholder="Name" />
				</div>

				<div className="form-group text-left">
					<label htmlFor="defaultContactFormEmail">Email</label>
					<input type="email" id="defaultContactFormEmail" className="form-control" placeholder="Email" />
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>

				<div className="form-group text-left mb-2">
					<label htmlFor="defaultSelect" className="text-left">Subject</label>
					<select value={this.state.value} onChange={this.handleChange}  id="defaultSelect" className="browser-default custom-select mb-4">
						<option value="Home Purchase">Home Purchase</option>
						<option value="VA Loan">VA Loan</option>
						<option value="Refinance">Refinance</option>
						<option value="Question">Question</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div className="form-group text-left">
					<label htmlFor="exampleFormControlTextarea2">Message</label>
					<textarea className="form-control" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
				</div>

				<div className="form-group text-left mt-4">
					<div className="custom-control-inline">
						<label htmlFor="defaultInline0">Response Via: </label>
					</div>

					<div className="custom-control custom-checkbox custom-control-inline">
						<input type="checkbox" className="custom-control-input" id="defaultInline1" />
						<label className="custom-control-label" htmlFor="defaultInline1">Phone</label>
					</div>

					<div className="custom-control custom-checkbox custom-control-inline">
						<input type="checkbox" className="custom-control-input" id="defaultInline2" />
						<label className="custom-control-label" htmlFor="defaultInline2">Email</label>
					</div>

					<div className="custom-control custom-checkbox custom-control-inline">
						<input type="checkbox" className="custom-control-input" id="defaultInline3" />
						<label className="custom-control-label" htmlFor="defaultInline3">Text</label>
					</div>

					<small id="emailHelp" className="form-text text-muted">Select all that apply.</small>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}