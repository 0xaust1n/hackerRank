function birthdayCakeCandles(candles) {
  // Write your code here
  let dict = new Map();
  let result = 0;
  candles.forEach((item) => {
    if (dict.has(item)) {
      let temp = parseInt(dict.get(item)) + 1;
      dict.set(item, temp);
      if (temp > result) {
        result = temp;
      }
    } else {
      dict.set(item, '1');
    }
  });
  return result;
}
  
