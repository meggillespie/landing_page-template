import React, { Component }  from 'react';
import { RefinanceFormPersonalDetails } from '../../templates/RefinanceForm/RefinanceFormPersonalDetails';
import { RefinanceFormLoanDetails } from '../../templates/RefinanceForm/RefinanceFormLoanDetails';
import { RefinanceFormLoanDetailsCont } from '../../templates/RefinanceForm/RefinanceFormLoanDetailsCont';
import { PurchaseFormPersonalDetails } from '../../templates/PurchaseForm/PurchaseFormPersonalDetails';
import { PurchaseFormLoanDetails } from '../../templates/PurchaseForm/PurchaseFormLoanDetails';
import { PurchaseFormLoanDetailsCont } from '../../templates/PurchaseForm/PurchaseFormLoanDetailsCont';

export class LeadForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentStep: 1,
			refinancedBefore: false,
			cashOut: false,

			name: '',
			email: '',
			phone: '',
			zipcode: '',
			creditScore: '',
			employmentStatus: 'choose',
			monthlyIncome: '',
			monthlyExpenses: '',

			propertyType: 'choose',
			currentLoanType: 'choose',
			estimatedValue: '',
			yearPurchased: '',
			dateOfLastRefi: '',
			originalLoanAmount: '',
			cashOutAmount: '',

			currentRate: '',
			mortgageBalance: '',
			currentEscrow: '',
			monthlyPI: '',
			hoi: '',
			tax: '',
			escrowFwd: '',
			secondMortgage: '',
			foreclosure: '',
			lateMortgagePayments: '',

			originalPurchasePrice: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		//const {name, value} = e.target;
		this.setState({ [name]: value })
	};

	handleSubmit = e => {
		e.preventDefault();

		const { email, name, phone, zipcode, creditScore, employmentStatus, monthlyIncome, monthlyExpenses,
			propertyType, estimatedValue, currentLoanType, yearPurchased, dateOfLastRefi, originalLoanAmount, cashOutAmount,
			currentRate, mortgageBalance, currentEscrow, monthlyPI, hoi, tax, escrowFwd, secondMortgage, lateMortgagePayments,
			foreclosure, originalPurchasePrice, } = this.state;

		alert(`Your Refinance Details: \n 
           Email: ${email} \n 
           Name: ${name} \n
           Phone Number: ${phone} \n
           Zipcode: ${zipcode} \n 
           Credit Score: ${creditScore} \n
           Employment Status: ${employmentStatus} \n
           Monthly Income: ${monthlyIncome} \n 
           Monthly Expenses: ${monthlyExpenses} \n \n 
           
           Property Type: ${propertyType} \n
           Estimated Value: ${estimatedValue} \n
           Current Loan Type: ${currentLoanType} \n
           Year Purchased: ${yearPurchased} \n
           Date of Last Refi: ${dateOfLastRefi} \n
           Orig. Loan Amount: ${originalLoanAmount} \n
           Cash Out: ${cashOutAmount} \n\n
           
           Current Interest Rate: ${currentRate} \n
           Mortgage Balance: ${mortgageBalance} \n
           Current Escrow Account: ${currentEscrow} \n
           Monthly PI: ${monthlyPI} \n
           HOI: ${hoi} \n
           TAX: ${tax} \n      
           Escrow Moving Forward: ${escrowFwd} \n
           Second Mortgage: ${secondMortgage} \n
           Foreclosure: ${foreclosure} \n
           Late Mortgage Payments: ${lateMortgagePayments} \n
           
           Original Purchase Price: ${originalPurchasePrice} `);
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
	 * form nav/button functions
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

		if (currentStep < 3) {
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


	render() {
		let formSubHeading = '';

		(() => {
			switch(this.state.currentStep) {
				case  1:
					return formSubHeading = 'PERSONAL DETAILS';
				case 2:
					return formSubHeading = 'CURRENT LOAN DETAILS';
				case  3:
					return formSubHeading = 'LOAN DETAILS CONT...';
				default:
					return formSubHeading += '';
			}
		})();

		return (
			<div>
				<h3 className="lead text-muted mb-5" style={{ marginTop: '5vh', fontWeight: '600' }}>{ formSubHeading }</h3>

				<form onSubmit={ this.handleSubmit } style={{ marginBottom: '10vh'}} className="text-left">
						{ (() => {
							if (this.props.formIndicator === 'refinance') {
								switch(this.state.currentStep) {
									case  1:
										return <RefinanceFormPersonalDetails
															employmentStatus={ this.state.employmentStatus }
															onChange={ this.handleChange } />;
									case 2:
										return <RefinanceFormLoanDetails
															refinancedBefore={ this.state.refinancedBefore }
										          cashOut={ this.state.cashOut }
										          onChange={ this.handleChange } />;
									case  3:
										return <RefinanceFormLoanDetailsCont onChange={ this.handleChange } />;
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
										return <PurchaseFormLoanDetailsCont onChange={ this.handleChange } />;
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
