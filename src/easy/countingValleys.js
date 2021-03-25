function countingValleys(steps, path) {
  // Write your code here
  let currentLevel = 1; //init sea level
  let count = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == 'U') {
      currentLevel++;
      if (currentLevel == 1) {
        count++;  // reach sea level
      }
    } else {
      currentLevel--;
    }
  }
  return count;
}

