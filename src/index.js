module.exports = function reverse(n) {
	let result = '';
	let strN = String(n);
	for (let i = 0; i < strN.length; i++) {
		result = `${strN[i]}${result}`;
	}
	return parseFloat(result) * -1;
}
