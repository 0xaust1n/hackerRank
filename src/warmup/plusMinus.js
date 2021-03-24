function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero  =0
  for (let i = 0; i < arr.length; i++) {

    let value = parseInt(arr[i]);
    if (value > 0) {
      positive++;
    }
    if (value < 0) {
      negative++;
    }
    if (value == 0) {
      zero++;
    }
  }
  let result = [];
  result[0] = (positive / arr.length).toFixed(6);
  result[1] = (negative/ arr.length).toFixed(6);
  result[2] = (zero / arr.length).toFixed(6);
  result.forEach(value =>{
      console.log(value);
  })
}

