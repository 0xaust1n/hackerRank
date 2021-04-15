//TL;DR For Question

/*
s => start position of houses
t => tail(end) position of house
range => bewteen s and t
a, b => tree position 
apples, oranges => array that record shifting of each fruit
Goal: counting how many fruites in range after shifting.
Joke: House and fruits are tape with mass of magnet in this quesiton :p
*/

//apporaching 1 brute force
function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let apple = 0;
	apples.forEach((item) => {
		let temp = a + item;
		if (temp >= s && temp <= t) {
			apple++;
		}
	});

	let orange = 0;
	oranges.forEach((item) => {
		let temp = b + item;
		if (temp >= s && temp <= t) {
			orange++;
		}
	});
	console.log(apple);
	console.log(orange);
}
