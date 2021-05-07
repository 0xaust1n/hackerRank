//apporaching 1 for
function apporaching1(k, a) {
	// Write your code here
	let onTime = 0;
	let result = 'YES';
	for (let i = 0; i < a.length; i++) {
		if (a[i] <= 0) {
			onTime++;
		}
		if (onTime >= k) {
			result = 'NO';
			break;
		}
	}

	return result;
}

// apporaching 2 forEach
function angryProfessor(k, a) {
	let count = 0;
	ary.forEach((e) => {
		if (e <= 0) {
			count++;
		}
	});
	return count >= k ? 'NO' : 'YES';
}
