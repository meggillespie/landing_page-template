import React, { Component }  from 'react';


export class LeadForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentStep: 1,
			email:  '',
			name: '',
			zipcode: '',
		}
	}

	handleChange = event => {
		const {name, value} = event.target;
		this.setState({
			[name]: value
		})
	};

	handleSubmit = event => {
		event.preventDefault();

		const { email, name, phone, zipcode, propertyType, estimatedValue, originalPurchasePrice, dateOfPurchase,
			dateOfLastRefi, loanAmount, currentLoanType, currentRate, mortgageBalance, monthlyPiti, currentEscrow,
			escrowFwd, secondMortgage, lateMortgagePayments, cashOut, employmentStatus, monthlyExpenses, creditScore,
			monthlyIncome } = this.state;

		alert(`Your Refinance Details: \n 
           Email: ${email} \n 
           Name: ${name} \n
           Phone Number: ${phone} \n
           Zipcode: ${zipcode} \n 
           Employment Status: ${employmentStatus} \n
           Monthly Income: ${monthlyIncome} \n 
           Monthly Expenses: ${monthlyExpenses} \n 
           Credit Score: ${creditScore} \n
           Property Type: ${propertyType} \n
           Estimated Value: ${estimatedValue} \n
           Original Purchase Price: ${originalPurchasePrice} \n
           Date of Purchase: ${dateOfPurchase} \n
           Date of Last Refi: ${dateOfLastRefi} \n
           Loan Amount: ${loanAmount} \n
           Current Loan Type: ${currentLoanType} \n
           Current Interest Rate: ${currentRate} \n
           Mortgage Balance: ${mortgageBalance} \n
           Monthly PITI (Principal, Interest, Taxes, Insr): ${monthlyPiti} \n
           Current Escrow Account: ${currentEscrow} \n
           Escrow Moving Forward: ${escrowFwd} \n
           Second Mortgage: ${secondMortgage} \n
           Late Mortgage Payments: ${lateMortgagePayments} \n
           Cash Out: ${cashOut} `)
	};

	_next = () => {
		let currentStep = this.state.currentStep;

		currentStep = currentStep >= 2 ? 3 : currentStep + 1;

		this.setState({
			currentStep: currentStep
		})
	};

	_prev = () => {
		let currentStep = this.state.currentStep;

		currentStep = currentStep <= 1 ? 1 : currentStep - 1;

		this.setState({
			currentStep: currentStep
		})
	};

	// _submit = () => {
	// 	let currentStep = 1;
	//
	// 	this.setState({
	// 		currentStep: currentStep
	// 	})
	// };

	/*
	 * the functions for our button
	 */
	previousButton() {
		let currentStep = this.state.currentStep;

		if ( currentStep !==1 ) {
			return (
				<button
					className="btn btn-secondary"
					type="button" onClick={this._prev}>
					Previous
				</button>
			)
		}
		return null;
	}

	nextButton(){
		let currentStep = this.state.currentStep;

		if( currentStep < 3 ){
			return (
				<button
					className="btn btn-primary float-right"
					type="button" onClick={this._next}>
					Next
				</button>
			)
		}

		return null;
	}


	// submitsButton() {
	// 	let currentStep = this.state.currentStep;
	//
	// 	if (currentStep === 4) {
	// 		return (
	// 			<button
	// 				className="btn btn-primary float-right"
	// 				type="button" onClick={this._submit}>
	// 				Submit
	// 			</button>
	// 		)
	// 	}
	// 	return null;
	// }


	render() {
		return (
			<div>
				<p>Step {this.state.currentStep} </p>

				<form onSubmit={this.handleSubmit}>
					{/*
					 render the form steps and pass required props in
					 */}
					<PersonalInfo
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						email={this.state.email}
					/>
					<Step2
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						name={this.state.name}
					/>
					<Step3
						currentStep={this.state.currentStep}
						handleChange={this.handleChange}
						zipcode={this.state.zipcode}
					/>
					{ this.previousButton() }
					{ this.nextButton() }

				</form>
			</div>
		);
	}
}

function PersonalInfo(props) {
	if (props.currentStep !== 1) {
		return null
	}
	return(
		<div className="form-group">
			<label htmlFor="email">Email Address</label>
			<input
				className="form-control"
				id="email"
				name="email"
				type="text"
				placeholder="example@domain.com"
				value={props.email}
				onChange={props.handleChange}
			/>
		</div>
	);
}

function Step2(props) {
	if (props.currentStep !== 2) {
		return null
	}
	return(
		<div className="form-group">
			<label htmlFor="name">Name</label>
			<input
				className="form-control"
				id="name"
				name="name"
				type="text"
				placeholder="John Doe"
				value={props.name}
				onChange={props.handleChange}
			/>
		</div>
	);
}

function Step3(props) {
	if (props.currentStep !== 3) {
		return null
	}
	return(
		<React.Fragment>
			<div className="form-group">
				<label htmlFor="password">Monthly Income</label>
				<input
					className="form-control"
					id="income"
					name="income"
					type="text"
					placeholder="Gross Monthly Income"
					value={props.monthlyIncome}
					onChange={props.handleChange}
				/>
			</div>
			<button className="btn btn-primary float-right">Submit</button>
		</React.Fragment>
	);
}

