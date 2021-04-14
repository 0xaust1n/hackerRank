// Complete the birthday function below.
function birthday(s, d, m) {
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		let temp = 0;
		if (i + m - 1 < s.length) {
			for (let j = i; j <= i + m - 1; j++) {
				temp += s[j];
			}
		} else {
			break;
		}
		if (temp == d) {
			count++;
		}
	}
	return count;
}

const test = () => {
	let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
	let m = 7;
	let d = 18;
	console.log(birthday(s, d, m));
};

test();
