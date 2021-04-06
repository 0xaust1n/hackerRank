// Complete the breakingRecords function below.
function breakingRecords(scores) {
  //init rank with index zero
  let lowest = scores[0];
  let highest = scores[0];
  let record = [0, 0];
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
      record[0]++;
    }
    if (scores[i] < lowest) {
      lowest = scores[i];
      record[1]++;
    }
  }
  return record;
}
