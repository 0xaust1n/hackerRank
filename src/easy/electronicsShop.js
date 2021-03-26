function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  //brute force solution
  let max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let temp = keyboards[i] + drives[j];
      if (temp > max && temp <= b) {
        max = temp;
      }
    }
  }
  return max;
}

