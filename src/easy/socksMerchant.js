// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let dict = new Map();
  let count = 0;
  for (let i = 0; i < ar.length; i++ ) {
    if (dict.has(ar[i])) {
      let tempCount = parseInt(dict.get(ar[i])) + 1;
      dict.set(ar[i], tempCount)
      if (tempCount % 2 == 0) {
        count++
      }
    }
    else{
      dict.set(ar[i], 1);
    }
  }
  return count++
}