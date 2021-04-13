const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let date = '';
let question = '';
let count = '';
let diffclut = '';

const getDiff = () => {
	readline.question('Enter Diffclut: ', (d) => {
		console.log(`The Diffclut is ${d}!`);
		diffclut = d;
		getDate();
	});
};

const getDate = () => {
	readline.question('Enter Data (format:YYYY/MM/DD): ', (d) => {
		console.log(`The Date is ${d}!`);
		date = d;
		c();
	});
};

const c = () => {
	readline.question('Current Count: ', (d) => {
		console.log(`The Count is ${d}!`);
		count = d;
		q();
	});
};

const q = () => {
	readline.question('Question Name (format: camel case): ', (d) => {
		console.log(`The Question is ${d}!`);
		question = d;
		render();
	});
};

const render = () => {
	let ary = question.replace(/([a-z0-9])([A-Z])/g, '$1 $2').split(' ');
	let temp_str = ary[0];
	ary[0] = temp_str.substring(0, 1).toUpperCase() + temp_str.substring(1, temp_str.length); //cap the first letter;
	let str = '';
	if (diffclut != 'exam') {
		str = '| [';
		ary.forEach((element, e) => {
			str += element;
			if (e < ary.length - 1) {
				str += ' ';
			}
		});
		str += ']';
		str += '[' + count + 'web' + '] ';
	} else {
		str = '| ';
		ary.forEach((element, e) => {
			str += element;
			if (e < ary.length - 1) {
				str += ' ';
			}
		});
	}
	str += '| ';
	str += '[Source Code]';
	str += '[' + count + 'code' + ']';
	str += '| ';
	str += date;
	str += ' |';

	console.log(str);

	let link = '';
	link += '[' + count + 'web' + ']:';
	link += 'https://www.hackerrank.com/challenges/';
	ary.forEach((element, e) => {
		let temp = element.toLocaleLowerCase();
		link += temp;
		if (e < ary.length - 1) {
			link += '-';
		}
	});
	link += '/problem';

	if (diffclut != 'exam') {
		console.log(link);
	}

	let src = '';
	src += '[' + count + 'code' + ']:';
	src += './src/';
	src += diffclut + '/';
	src += question + '.js';
	console.log(src);
	readline.close();
};

getDiff();
