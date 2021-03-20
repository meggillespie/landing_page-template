import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import { AvForm } from 'availity-reactstrap-validation';
import emailjs from 'emailjs-com';
import { formatDollarValues, phoneNumberFilter } from '../../filters/filters'
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
			refiLoanTerm: '',
			realEstateAgent: '',
			firstTimeHomeBuyer: '',

			propertyType: '',
			currentLoanType: '',
			estimatedValue: '',
			yearPurchased: '',
			originalLoanAmount: '',
			refinancedBefore: false,
			dateOfLastRefi: '',
			cashOut: false,
			cashOutAmount: '',
			originalLoanTerm: '',

			currentRate: '',
			mortgageBalance: '',
			secondMortgage: '',
			monthlyPI: '',
			hoi: '',
			tax: '',
			purchaseLoanTerm: '',
			currentEscrow: '',
			escrowFwd: '',
			lateMortgagePayments: '',

			bankruptcyShortsaleForeclosure: '',
			currentStep: 1,
			redirect: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
		this.handleValidSubmit = this.handleValidSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		value = name === 'monthlyIncome' ? formatDollarValues(value) : value;
		value = name === 'monthlyExpenses' ? formatDollarValues(value) : value;
		value = name === 'purchasePrice' ? formatDollarValues(value) : value;
		value = name === 'estimatedDownPayment' ? formatDollarValues(value) : value;
		value = name === 'estimatedValue' ? formatDollarValues(value) : value;
		value = name === 'originalLoanAmount' ? formatDollarValues(value) : value;
		value = name === 'cashOutAmount' ? formatDollarValues(value) : value;
		value = name === 'mortgageBalance' ? formatDollarValues(value) : value;
		value = name === 'secondMortgage' ? formatDollarValues(value) : value;
		value = name === 'monthlyPI' ? formatDollarValues(value) : value;
		value = name === 'hoi' ? formatDollarValues(value) : value;
		value = name === 'tax' ? formatDollarValues(value) : value;

		value = name === 'phone' ? phoneNumberFilter(value) : value;

		this.setState({ [name]: value })
	};

	handleInvalidSubmit(e, errors, values) {
		const target = e.target;

		if (target) {
			const value = target.type === 'checkbox' ? target.checked : target.value;
			const name = target.name;

			this.setState({ [name]: value, error: true });
		}

		alert(`All Fields Must Be Completed`);
	}

	handleValidSubmit(e, values) {
		e.preventDefault();
		let leadParams = this.state;

		if (this.props.formIndicator === 'refinance') {
			let self = this;

			emailjs.send('service_8l6p57o','template_w9ypx75', leadParams, 'user_C86O0FT0wefYL1wUuSg0L')
				.then(function(response) {
					self._setRedirect();

				}, function(error) {
					alert('FAILED...', error);
				});
		} else if ( this.props.formIndicator === 'purchase' ){
			let self = this;

			emailjs.send('service_8l6p57o','template_q9urm78', leadParams, 'user_C86O0FT0wefYL1wUuSg0L')
				.then(function(response) {
					self._setRedirect();

				}, function(error) {
					alert('FAILED...', error);
				});
		}
	};

	_setRedirect = () => {
		this.setState({
			redirect: true
		})
	};

	_renderRedirect = () => {
		if ( this.state.redirect ) {
			return <Redirect to='/thanks' />
		}
	};

	_next = () => {
		let currentStep = this.state.currentStep;
		let formComplete = this._checkFields();

		if ( formComplete ) {
			currentStep = currentStep >= 2 ? 3 : currentStep + 1;

			this.setState({ currentStep: currentStep })
		} else {
			alert(`Complete All Required Fields`);
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
		} else if ( this.state.currentStep === 2 && this.props.formIndicator === 'refinance') {
			console.log(formValues)
			for (let i = 15; i <= 19; i++) {
				if(	formValues[i] === "" || formValues[i] === "choose" ) {
					emptyFieldIndicator.empty.push(formValues[i])
				}
			}
		}
		return emptyFieldIndicator.empty.length === 0;
	};

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
			<div>
				{ this._renderRedirect() }
				<button className="btn btn-primary float-right">Submit</button>
			</div>
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
					return formSubHeading = 'LOAN DETAILS';
				case  3:
					return formSubHeading = 'LOAN DETAILS CONT...';
				default:
					return formSubHeading += '';
			}
		})();

		return (
			<div>
				<h4 className="lead text-muted mb-5" style={{ marginTop: '5vh', fontWeight: '600' }}>{ formSubHeading }</h4>

				<AvForm autoComplete="on" onValidSubmit={ this.handleValidSubmit }
				        onInvalidSubmit={ this.handleInvalidSubmit } id="lead-form" style={{ marginBottom: '10vh' }}
				        className="text-left">
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
															originalLoanTerm={ this.state.originalLoanTerm }
															onChange={ this.handleChange } />;
									case  3:
										return <RefinanceFormLoanDetailsCont
															currentRate={ this.state.currentRate }
															mortgageBalance={ this.state.mortgageBalance }
															monthlyPI={ this.state.monthlyPI }
															hoi={ this.state.hoi }
															tax={ this.state.tax }
															refiLoanTerm={ this.state.refiLoanTerm }
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
															purchaseLoanTerm={ this.state.purchaseLoanTerm }
															firstTimeHomeBuyer={ this.state.firstTimeHomeBuyer }
															realEstateAgent={ this.state.realEstateAgent }
															bankruptcyShortsaleForeclosure={ this.state.bankruptcyShortsaleForeclosure }
															onChange={ this.handleChange } />;
									default:
										return null;
								}
							}
						}) () }

					{ this.nextButton() }
					{ this.submitButton() }
				</AvForm>
			</div>
		);
	}
}
