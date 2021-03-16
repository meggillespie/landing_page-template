// import CurrencyFormat from 'react-currency-format';
import accounting from 'accounting-js';


function toFixedDecimals(num) {
	let digits = num.replace(/[^0-9.]/g, '');
	let rate = digits + '%';

	return rate;
}

function formatDollarValues(val) {
	let formattedDollars, dollars, firstSet, secondSet, thirdSet;

	if (val && val.length > 0) {
		let placeValues = val.replace(/[^0-9]/g, '');

		dollars = placeValues.length > 7 ? placeValues.substr(0, 7) : placeValues;

		if (dollars.length <= 3) {
			formattedDollars = dollars.slice(0,3);
		}

		if (dollars.length > 3 && dollars.length <= 6) {
			firstSet = dollars.slice(0,3);
			secondSet = dollars.slice(3,6);
			formattedDollars = firstSet +','+ secondSet;
		}

		if (dollars.length > 6 && dollars.length <= 7) {
			firstSet = dollars.slice(0,1);
			secondSet = dollars.slice(1,4);
			thirdSet = dollars.slice(4,7);
			formattedDollars = firstSet +','+ secondSet +','+ thirdSet;
		}
	}
	else {
		formattedDollars = '';
	}

	return formattedDollars;
}

function phoneNumberFilter (val) {
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
}

export { toFixedDecimals, formatDollarValues, phoneNumberFilter};
