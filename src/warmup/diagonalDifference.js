function diagonalDifference(arr) {
    // Write your code here
    let high = (arr.length -1);
    let length = arr[0].length;
    let a = 0;
    let b = 0;
    for(let i=0; i< length; i++){
        a+= arr[i][i];
        b+= arr[i][high];
        high--;
    }
    let result = Math.abs(a-b);
    return result;
}
