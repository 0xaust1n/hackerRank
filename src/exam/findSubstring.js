/*
giving string => s  int => k
purpose: substring with most of vowels in string by k length
corner case: 
1. same count : return index smaller one
2. zero count : reutrn substirng(0,k)
*/

//apporching 1 Big-o(n^2)
function findSubstring(s, k) {
	// Write your code here
	let vowels = ['a', 'e', 'i', 'o', 'u'];
	let count = 0;
	let result = ''; // record last head
	let head = 0; // record current head
	let times = 0; //record running time
	let volCount = 0;

	for (let i = 0; i < s.length; i++) {
		if (vowels.includes(s.charAt(i))) {
			volCount++;
		}
		if ((times + 1) % k == 0) {
			if (volCount > count || (volCount == count && head < result)) {
				count = volCount;
				volCount = 0;
				times = -1;
				result = head;
				i = head;
				head++;
			} else {
				volCount = 0;
				times = -1;
				i = head;
				head++;
			}
		}
		times++;
	}
	result = s.substring(result, k + result);

	if (count == 0) {
		result = 'Not found!';
	}
	return result;
}
