// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
	let dict = new Map();
	let count = 0;
	for (let i = 0; i < ar.length; i++) {
		if (dict.has(ar[i])) {
			let tempCount = parseInt(dict.get(ar[i])) + 1;
			dict.set(ar[i], tempCount);
			if (tempCount % 2 == 0) {
				count++;
			}
		} else {
			dict.set(ar[i], 1);
		}
	}
	return count++;
}

// Clean Way
const socksMerchant = (n, ary) => {
	let map = new Map();
	let c = 0;
	ar.forEach((x) => {
		let temp = map.has(x) ? map.get(x) + 1 : 1;
		c = temp % 2 == 0 ? c + 1 : c;
		map.set(x, temp);
	});
	return c;
};
