import React, { Component }  from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import emailjs from 'emailjs-com';
import { RefinanceFormPersonalDetails } from '../../templates/RefinanceForm/RefinanceFormPersonalDetails';
import { RefinanceFormLoanDetails } from '../../templates/RefinanceForm/RefinanceFormLoanDetails';
import { RefinanceFormLoanDetailsCont } from '../../templates/RefinanceForm/RefinanceFormLoanDetailsCont';
import { PurchaseFormPersonalDetails } from '../../templates/PurchaseForm/PurchaseFormPersonalDetails';
import { PurchaseFormLoanDetails } from '../../templates/PurchaseForm/PurchaseFormLoanDetails';

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
			employmentStatus: '',
			monthlyIncome: '',
			monthlyExpenses: '',

			propertyType: '',
			currentLoanType: '',
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
		this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
		this.handleValidSubmit = this.handleValidSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value })
	};

	handleInvalidSubmit(e, errors, values) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value, error: true });
	}

	// function sendEmail(e) {
	// 	e.preventDefault();
	//
	// 	emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
	// 		.then((result) => {
	// 			console.log(result.text);
	// 		}, (error) => {
	// 			console.log(error.text);
	// 		});
	// }

	handleValidSubmit(e, values) {
		e.preventDefault();

		// console.log('TARGET ');
		// console.log(e.target);
		console.log('\n');
		console.log('STATE');
		console.log(this.state);
		console.log('\n');

		let leadParams = this.state;



		// const { email, name, phone, zipcode, creditScore, employmentStatus, monthlyIncome, monthlyExpenses,
		// 	propertyType, estimatedValue, currentLoanType, yearPurchased, dateOfLastRefi, originalLoanAmount, cashOutAmount,
		// 	currentRate, mortgageBalance, currentEscrow, monthlyPI, hoi, tax, escrowFwd, secondMortgage, lateMortgagePayments,
		// 	foreclosure, originalPurchasePrice, } = this.state;

		// alert(`Your Refinance Details: \n
     //       Email: ${email} \n
     //       Name: ${name} \n
     //       Phone Number: ${phone} \n
     //       Zipcode: ${zipcode} \n
     //       Credit Score: ${creditScore} \n
     //       Employment Status: ${employmentStatus} \n
     //       Monthly Income: ${monthlyIncome} \n
     //       Monthly Expenses: ${monthlyExpenses} \n \n
     //
     //       Property Type: ${propertyType} \n
     //       Estimated Value: ${estimatedValue} \n
     //       Current Loan Type: ${currentLoanType} \n
     //       Year Purchased: ${yearPurchased} \n
     //       Date of Last Refi: ${dateOfLastRefi} \n
     //       Orig. Loan Amount: ${originalLoanAmount} \n
     //       Cash Out: ${cashOutAmount} \n\n
     //
     //       Current Interest Rate: ${currentRate} \n
     //       Mortgage Balance: ${mortgageBalance} \n
     //       Second Mortgage: ${secondMortgage} \n
     //       Monthly PI: ${monthlyPI} \n
     //       HOI: ${hoi} \n
     //       TAX: ${tax} \n
     //       Current Escrow Account: ${currentEscrow} \n
     //       Escrow Moving Forward: ${escrowFwd} \n
     //       Foreclosure: ${foreclosure} \n
     //       Late Mortgage Payments: ${lateMortgagePayments} \n
     //
     //       Original Purchase Price: ${originalPurchasePrice} `);

		emailjs.send('service_8l6p57o','template_w9ypx75', leadParams, 'user_C86O0FT0wefYL1wUuSg0L')
			.then(function(response) {
				console.log('SUCCESS!', response.status, response.text);
			}, function(error) {
				console.log('FAILED...', error);
			});
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		let formComplete = this._checkFields();

		if ( formComplete ) {
			currentStep = currentStep >= 2 ? 3 : currentStep + 1;

			this.setState({ currentStep: currentStep })
		} else {
			alert(`All Fields Must Be Completed`);
		}
	};

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1 ? 1 : currentStep - 1;

		this.setState({ currentStep: currentStep })
	};

	_checkFields = () => {
		let formValues = Object.values(this.state);
		let emptyFieldIndicator = { empty: [], present: [] };

		if ( this.state.currentStep === 1 ) {
			for (let i = 3; i <= 10; i++) {
				if(	formValues[i] === "" || formValues[i] === "choose" ) {
					emptyFieldIndicator.empty.push(formValues[i])
				}
			}
		}
		return emptyFieldIndicator.empty.length === 0;
	};

	// form nav/button functions
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

		if (( currentStep === 1 && this.props.formIndicator === 'purchase') || (currentStep <= 2 && this.props.formIndicator === 'refinance')) {
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

		if (( currentStep === 2 && this.props.formIndicator === 'purchase') || (currentStep === 3 && this.props.formIndicator === 'refinance')) {
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


		// console.log('STATE');
		// console.log(this.state);

		return (
			<div>
				<h3 className="lead text-muted mb-5" style={{ marginTop: '5vh', fontWeight: '600' }}>{ formSubHeading }</h3>

				<AvForm onValidSubmit={ this.handleValidSubmit } onInvalidSubmit={ this.handleInvalidSubmit } id="lead-form" style={{ marginBottom: '10vh' }} className="text-left">
						{ (() => {
							if (this.props.formIndicator === 'refinance') {
								switch(this.state.currentStep) {
									case  1:
										return <RefinanceFormPersonalDetails
															name={ this.state.name }
															email={ this.state.email }
															phone={ this.state.phone }
															zipcode={ this.state.zipcode }
															creditScore={ this.state.creditScore }
															employmentStatus={ this.state.employmentStatus }
															monthlyIncome={ this.state.monthlyIncome }
															monthlyExpenses={ this.state.monthlyExpenses }
															onChange={ this.handleChange } />;
									case 2:
										return <RefinanceFormLoanDetails
															propertyType = { this.state.propertyType }
															currentLoanType = { this.state.currentLoanType }
															estimatedValue = { this.state.estimatedValue }
															yearPurchased = { this.state.yearPurchased }
															refinancedBefore={ this.state.refinancedBefore }
															dateOfLastRefi = { this.state.dateOfLastRefi }
															originalLoanAmount = { this.state.originalLoanAmount }
															cashOut={ this.state.cashOut }
															cashOutAmount={ this.state.cashOutAmount }
															onChange={ this.handleChange } />;
									case  3:
										return <RefinanceFormLoanDetailsCont
															currentRate={ this.state.currentRate }
															mortgageBalance={ this.state.mortgageBalance }
															secondMortgage={ this.state.secondMortgage }
															monthlyPI={ this.state.monthlyPI }
															hoi={ this.state.hoi }
															tax={ this.state.tax }
															currentEscrow={ this.state.currentEscrow }
															escrowFwd={ this.state.escrowFwd }
															onChange={ this.handleChange } />;
									default:
										return null;
								}
							} else {
								switch(this.state.currentStep) {
									case  1:
										return <PurchaseFormPersonalDetails onChange={ this.handleChange } />;
									case 2:
										return <PurchaseFormLoanDetails onChange={ this.handleChange } />;
									default:
										return null;
								}
							}
						}) () }

					{ this.previousButton() }
					{ this.nextButton() }
					{ this.submitButton() }
				</AvForm>
			</div>
		);
	}
}
