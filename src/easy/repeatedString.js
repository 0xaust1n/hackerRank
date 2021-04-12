// Complete the repeatedString function below.
function repeatedString(s, n) {
	let repeat = Math.floor(n / s.length);
	let count = (s.match(/a/g) || []).length;
	//counting extra
	let extra = n % s.length;
	let subStr = s.substring(0, extra);
	let extraCount = (subStr.match(/a/g) || []).length;
	return repeat * count + extraCount;
}
