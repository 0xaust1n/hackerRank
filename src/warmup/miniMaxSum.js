// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
let sortArray = arr.sort(); //cheating
let BigSum = 0;
    for(let i = 0 ; i< arr.length -1; i++){
      BigSum += arr[arr.length  - (i+1)];
    }
let SmallSum = 0;
    for(let j= 0; j< arr.length -1 ; j++){
        SmallSum += arr[j];
    }
    console.log(SmallSum + " " + BigSum);
}