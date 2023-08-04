module.exports = function reverse(n) {
	let result = '';
	let strN = String(n);
	for (let i = 0; i < strN.length; i++) {
		result = `${strN[i]}${result}`;
	} 
	if (strN[0] == '-') {
		return parseFloat(result) * -1;
	} else {
		return parseFloat(result);
	}
}
