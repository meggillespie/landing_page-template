import React, { Component }  from 'react';
import { AvForm } from 'availity-reactstrap-validation';
import emailjs from 'emailjs-com';
import { FormPersonalDetails } from '../../formTemplates/FormPersonalDetails';
import { PurchaseFormLoanDetails } from '../../formTemplates/PurchaseForm/PurchaseFormLoanDetails';
import { RefinanceFormLoanDetails } from '../../formTemplates/RefinanceForm/RefinanceFormLoanDetails';
import { RefinanceFormLoanDetailsCont } from '../../formTemplates/RefinanceForm/RefinanceFormLoanDetailsCont';

export class LeadForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phone: '',
			zipcode: '',
			creditScore: '',
			employmentStatus: '',
			monthlyIncome: '',
			monthlyExpenses: '',

			purchaseStage: '',
			propertyUse: '',
			purchasePrice: '',
			estimatedDownPayment: '',
			ratePreference: '',
			realEstateAgent: '',
			firstTimeHomeBuyer: '',

			propertyType: '',
			bankruptcyShortsaleForeclosure: '',

			currentLoanType: '',
			estimatedValue: '',
			yearPurchased: '',
			refinancedBefore: false,
			dateOfLastRefi: '',
			originalLoanAmount: '',
			cashOut: false,
			cashOutAmount: '',

			currentRate: '',
			mortgageBalance: '',
			secondMortgage: '',
			monthlyPI: '',
			hoi: '',
			tax: '',
			currentEscrow: '',
			escrowFwd: '',
			lateMortgagePayments: '',

			currentStep: 1
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
		this.handleValidSubmit = this.handleValidSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		value = name === 'phone' ? this._phoneNumberFilter(value) : value;

		this.setState({ [name]: value })
	};

	_phoneNumberFilter = (val) => {
		let formattedNumber, number, areaCode, phoneNumberFirstSet, phoneNumberSecondSet;

		if (val && val.length > 0) {
			let digits = val.replace(/[^0-9]/g, '');

			number = digits.charAt(0) === '1' ? digits.substr(1) : digits;

			number = digits.length > 9 ? digits.substr(0, 10) : digits;

			if (number.length <= 2) {
				areaCode = number.slice(0,3);
				formattedNumber = '(' + areaCode;
			}

			if (number.length > 2 && number.length <= 3) {
				areaCode = number.slice(0,3);

				formattedNumber = '(' + areaCode + ')' ;
			}

			if (number.length > 3 && number.length <= 5) {
				areaCode = number.slice(0,3);
				phoneNumberFirstSet = number.slice(3,6);

				formattedNumber = '(' + areaCode + ') ' + phoneNumberFirstSet;
			}

			if (number.length > 5) {
				areaCode = number.slice(0,3);
				phoneNumberFirstSet = number.slice(3,6);
				phoneNumberSecondSet = number.slice(6,10);

				formattedNumber = '(' + areaCode + ') ' + phoneNumberFirstSet + '-' + phoneNumberSecondSet;
			}
		}
		else {
			formattedNumber = ''
		}

		return formattedNumber;
	};

	handleInvalidSubmit(e, errors, values) {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({ [name]: value, error: true });
	}

	handleValidSubmit(e, values) {
		e.preventDefault();
		let leadParams = this.state;

		if (this.props.formIndicator === 'refinance') {
			emailjs.send('service_8l6p57o','template_w9ypx75', leadParams, 'user_C86O0FT0wefYL1wUuSg0L')
				.then(function(response) {
					console.log('SUCCESS!', response.status, response.text);
				}, function(error) {
					console.log('FAILED...', error);
				});
		} else {
			emailjs.send('service_8l6p57o','template_q9urm78', leadParams, 'user_C86O0FT0wefYL1wUuSg0L')
				.then(function(response) {
					console.log('SUCCESS!', response.status, response.text);
				}, function(error) {
					console.log('FAILED...', error);
				});
		}

		//
		//GO TO THANK YOU PAGE
		//

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

	_checkFields = () => {
		let formValues = Object.values(this.state);
		let emptyFieldIndicator = { empty: [], present: [] };

		if ( this.state.currentStep === 1 ) {
			for (let i = 0; i <= 7; i++) {
				if(	formValues[i] === "" || formValues[i] === "choose" ) {
					emptyFieldIndicator.empty.push(formValues[i])
				}
			}
		}
		return emptyFieldIndicator.empty.length === 0;
	};


	// _prev = () => {
	// 	let currentStep = this.state.currentStep;
	// 	currentStep = currentStep <= 1 ? 1 : currentStep - 1;
	//
	// 	this.setState({ currentStep: currentStep })
	// };

	// form nav/button functions
	// previousButton() {
	// 	let currentStep = this.state.currentStep;
	//
	// 	if (currentStep !==1) {
	// 		return (
	// 			<button className="btn btn-secondary" type="button" onClick={ this._prev }>
	// 				Previous
	// 			</button>
	// 		)
	// 	}
	// 	return null;
	// }

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

		return (
			<div>
				<h4 className="lead text-muted mb-5" style={{ marginTop: '5vh', fontWeight: '600' }}>{ formSubHeading }</h4>

				<AvForm onValidSubmit={ this.handleValidSubmit } onInvalidSubmit={ this.handleInvalidSubmit } id="lead-form" style={{ marginBottom: '10vh' }} className="text-left">
						{ (() => {
							if (this.props.formIndicator === 'refinance') {
								switch(this.state.currentStep) {
									case  1:
										return <FormPersonalDetails
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
															monthlyPI={ this.state.monthlyPI }
															hoi={ this.state.hoi }
															tax={ this.state.tax }
															secondMortgage={ this.state.secondMortgage }
															currentEscrow={ this.state.currentEscrow }
															escrowFwd={ this.state.escrowFwd }
															bankruptcyShortsaleForeclosure={ this.state.bankruptcyShortsaleForeclosure }
															lateMortgagePayments={ this.state.lateMortgagePayments }
															onChange={ this.handleChange } />;
									default:
										return null;
								}
							} else {
								switch(this.state.currentStep) {
									case  1:
										return <FormPersonalDetails
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
										return <PurchaseFormLoanDetails
											purchaseStage={ this.state.purchaseStage }
											propertyType={ this.state.propertyType }
											propertyUse={ this.state.propertyUse }
											purchasePrice={ this.state.purchasePrice }
											estimatedDownPayment={ this.state.estimatedDownPayment }
											ratePreference={ this.state.ratePreference }
											firstTimeHomeBuyer={ this.state.firstTimeHomeBuyer }
											realEstateAgent={ this.state.realEstateAgent }
											bankruptcyShortsaleForeclosure={ this.state.bankruptcyShortsaleForeclosure }
											onChange={ this.handleChange } />;
									default:
										return null;
								}
							}
						}) () }

					{/*{ this.previousButton() }*/}
					{ this.nextButton() }
					{ this.submitButton() }
				</AvForm>
			</div>
		);
	}
}
