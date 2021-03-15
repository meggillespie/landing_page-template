// import CurrencyFormat from 'react-currency-format';
// import accounting from 'accounting-js';


function toFixedDecimals(num) {
	let digits = num.replace(/[^0-9.]/g, '');
	let rate = digits + '%';

	return rate;
}

function formatDollarValues(val) {
	//return val.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

	// console.log(formatDollarValues(2665)) // 2,665
	// console.log(formatDollarValues(102665)) // 102,665
	// console.log(formatDollarValues(111102665)) // 111,102,665

	// return '$' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	// console.info(currencyFormat(2665)); // $2,665.00
	// console.info(currencyFormat(102665)); // $102,665.00

	//return accounting.formatNumber(val);
	//return accounting.formatMoney(val, "$ ", 0)
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
