// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let array = [0,0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      array[0] +=1
    }
    if (a[i] < b[i]) {
        array[1] +=1
    }
  }

  return array;
}
