// Complete the birthday function below.
//apporaching 1  brute force
function apporaching1(s, d, m) {
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

//apporaching 2 use an array to record the sum
function birthday(s, d, m) {
	let count = 0;
	let sumArray = [];
	for (let i = 0; i < s.length; i++) {
		if (i == 0) {
			sumArray.push(s[i]);
		} else {
			let temp = s[i] + sumArray[i - 1];
			sumArray.push(temp); // sum all the elements before index
		}
	}
	for (let j = m - 1; j < sumArray.length; j++) {
		let overflow = j - m >= 0 ? sumArray[j - m] : 0; //j - m  out of the index
		let sum = sumArray[j] - overflow;
		if (sum == d) {
			count++;
		}
	}
	return count;
}
