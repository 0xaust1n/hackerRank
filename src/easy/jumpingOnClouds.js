// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
	let count = 0;
	let stack = 0;

	for (let i = 1; i < c.length; i++) {
		if (c[i] != 1) {
			stack++;
			if (stack == 2) {
				stack = 0;
				count++;
			}
		} else {
			count += stack; //release the stack
			count++;
			stack = 0;
			i++;
		}
		if (i == c.length - 1) {
			count += stack; //release the stack
		}
	}
	return count;
}

/* Explanation Here */
/*
count is counter
stack for counting the jumps steps
whenever stack equal '2' counter increase
whenever value equal '1' counter increase and plus the value of stack 
whenever index is equal array's length minus '1'  (actual index of last child)  counter pluse the value of stack
whenever counter increasing reset the stack to '0'
the counter will be final answer of this question
*/
