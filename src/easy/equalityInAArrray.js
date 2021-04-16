// Complete the equalizeArray function below.
function equalizeArray(arr) {
	let hash = new Map();
	let count = 0;
	arr.forEach((element) => {
		if (hash.has(element)) {
			let temp = hash.get(element) + 1;
			hash.set(element, temp);
			if (temp > count) {
				count = temp;
			}
		} else {
			hash.set(element, 1);
			if (count == 0) {
				count = 1;
			}
		}
	});

	return arr.length - count;
}

const test = () => {
	let array = [37, 32, 97, 35, 76, 62];
	console.log(equalizeArray(array));
};

test();
