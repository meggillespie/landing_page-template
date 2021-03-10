import numeral from 'numeral';

function toFixedDecimals(num) {
	let digits = num.replace(/[^0-9.]/g, '');
	let rate = digits + '%';

	return rate;
}

function formatDollarValues(val) {
	return numeral(val).format('$ 0,0');

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
