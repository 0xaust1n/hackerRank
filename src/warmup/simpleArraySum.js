//A Very Big Sum using same solution
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let result = ar.reduce(
        (acc,cur) => acc+ cur,
        0
    );
    return result;
}

