// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
	let map = new Map();
	let index = '';
	let count = 0;
	arr.forEach((item) => {
		if (!map.has(item)) {
			map.set(item, 1);
		} else {
			let temp = map.get(item) + 1;
			if (temp > count) {
				count = temp;
				index = item;
			}
			if (temp == count && parseInt(item) < parseInt(index)) {
				count = temp;
				index = item;
			}
			map.set(item, temp);
		}
	});
	let ans = parseInt(index);
	return ans;
}
