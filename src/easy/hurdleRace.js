// Complete the hurdleRace function below.
function hurdleRace(k, height) {
	let result = 0;
	height.sort((a, b) => b - a);
	if (height[0] - k > 0) {
		result = height[0] - k;
	}
	return result;
}
