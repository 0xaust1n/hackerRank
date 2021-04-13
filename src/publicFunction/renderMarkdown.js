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
		str = `| [${generateCamelCase(ary)}][${count}web]`;
	} else {
		str = `| [${generateCamelCase(ary)}]`;
	}
	str += ` | [Source Code][${count}code] | ${date} |`;
	console.log(str);

	let link = `[${count}web]:https://www.hackerrank.com/challenges/`;
	link += `${generateSnakeCase(ary)}/problem`;
	if (diffclut != 'exam') {
		console.log(link);
	}

	let src = `[${count}code]:./src/${diffclut}/${question}.js`;
	console.log(src);
	readline.close();
};

const generateSnakeCase = (ary) => {
	let word = '';
	ary.forEach((element, e) => {
		let temp = element.toLocaleLowerCase();
		word += temp;
		if (e < ary.length - 1) {
			word += '-';
		}
	});
	return word;
};

const generateCamelCase = (ary) => {
	let word = '';
	ary.forEach((element, e) => {
		word += element;
		if (e < ary.length - 1) {
			word += ' ';
		}
	});
	return word;
};

getDiff();
