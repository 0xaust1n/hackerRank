function bonAppetit(bill, k, b) {
	// Write your code here
	let sum = 0;
	bill.forEach((e) => {
		sum += e;
	});
	let actBill = (sum - bill[k]) / 2;
	let ans = b - actBill;
	if (ans > 0) {
		console.log(ans);
	} else {
		console.log('Bon Appetit');
	}
}
