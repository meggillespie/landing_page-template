import React, { Component }  from 'react';
import { RefinanceFormPersonalDetails } from '../../templates/RefinanceForm/RefinanceFormPersonalDetails';
import { RefinanceFormLoanDetails } from '../../templates/RefinanceForm/RefinanceFormLoanDetails';
import { RefinanceFormPropertyDetails } from '../../templates/RefinanceForm/RefinanceFormPropertyDetails';
import { PurchaseFormPersonalDetails } from '../../templates/PurchaseForm/PurchaseFormPersonalDetails';
import { PurchaseFormLoanDetails } from '../../templates/PurchaseForm/PurchaseFormLoanDetails';
import { PurchaseFormPropertyDetails } from '../../templates/PurchaseForm/PurchaseFormPropertyDetails';

export class LeadForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentStep: 1,
			name: '',
			email: '',
			phone: '',
			zipcode: '',
			creditScore: '',
			employmentStatus: '',
			monthlyIncome: '',
			monthlyExpenses: '',

			propertyType: '',
			estimatedValue: '',
			currentLoanType: '',
			originalPurchasePrice: '',
			dateOfPurchase: '',
			dateOfLastRefi: '',
			originalLoanAmount: '',
			currentRate: '',
			mortgageBalance: '',
			monthlyPI: '',

			currentEscrow: '',
			escrowFwd: '',
			hoi: '',
			tax: '',

			secondMortgage: '',
			foreclosure: '',
			lateMortgagePayments: '',
			cashOut: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		console.log('change called');
		console.log(e);

		const {name, value} = e.target;
		this.setState({ [name]: value })
	};

	handleSubmit = e => {
		e.preventDefault();

		const { email, name, phone, zipcode, creditScore, employmentStatus, monthlyIncome, monthlyExpenses,
			propertyType, estimatedValue, originalPurchasePrice, dateOfPurchase, dateOfLastRefi, originalLoanAmount,
			currentLoanType, currentRate, mortgageBalance, monthlyPiti, currentEscrow,
			escrowFwd, secondMortgage, lateMortgagePayments, cashOut } = this.state;

		alert(`Your Refinance Details: \n 
           Email: ${email} \n 
           First Name: ${name} \n
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
           Orig. Loan Amount: ${originalLoanAmount} \n
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

		this.setState({ currentStep: currentStep })
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;

		this.setState({ currentStep: currentStep })
	};



	/*
	 * the functions for our button
	 */
	previousButton() {
		let currentStep = this.state.currentStep;

		if (currentStep !==1) {
			return (
				<button className="btn btn-secondary" type="button" onClick={ this._prev }>
					Previous
				</button>
			)
		}
		return null;
	}

	nextButton() {
		let currentStep = this.state.currentStep;

		if (currentStep < 3){
			return (
				<button className="btn btn-primary float-right" type="button" onClick={ this._next }>
					Next
				</button>
			)
		}

		return null;
	}

	submitButton() {
		let currentStep = this.state.currentStep;

		if (currentStep > 2) {
			return (
				<button className="btn btn-primary float-right">Submit</button>
			)
		}
	}


	/*
	 * Render function
	 */
	render() {
		let formSubHeading = '';

		{ (() => {
			switch(this.state.currentStep) {
				case  1:
					return formSubHeading = 'Personal Details';
				case 2:
					return formSubHeading = 'Loan Details';
				case  3:
					return formSubHeading = 'Loan Details Cont.';
				default:
					return formSubHeading += '';
			}
		}) () }

		return (
			<div>
				<p className="lead text-muted mb-5" style={{ marginTop: '5vh', fontWeight: '600' }}>{ formSubHeading }</p>

				<form onSubmit={ this.handleSubmit } style={{ marginBottom: '15vh'}} className="text-left">
						{ (() => {

							if (this.props.formIndicator === 'refinance') {

								switch(this.state.currentStep) {
									case  1:
										return <RefinanceFormPersonalDetails onChange={ this.handleChange } />;
									case 2:
										return <RefinanceFormLoanDetails onChange={ this.handleChange } />;
									case  3:
										return <RefinanceFormPropertyDetails onChange={ this.handleChange } />;
									default:
										return null;
								}
							} else {

								switch(this.state.currentStep) {
									case  1:
										return <PurchaseFormPersonalDetails onChange={ this.handleChange } />;
									case 2:
										return <PurchaseFormLoanDetails onChange={ this.handleChange } />;
									case  3:
										return <PurchaseFormPropertyDetails onChange={ this.handleChange } />;
									default:
										return null;
								}
							}
						}) () }

					{ this.previousButton() }
					{ this.nextButton() }
					{ this.submitButton() }
				</form>
			</div>
		);
	}
}
