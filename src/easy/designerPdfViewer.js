// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
	let highest = 0;
	for (let i = 0; i < word.length; i++) {
		let index = word[i].charCodeAt(0) - 97;
		//set ASCCII index to alphabet index; (ASCII start at 97 with lowercase)
		if (h[index] > highest) {
			highest = h[index];
		}
	}
	return highest * 1 * word.length;
}
