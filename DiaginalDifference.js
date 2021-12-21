
//Given a square matrix, calculate the absolute difference between the sums of its diagonals.


function diagonalDifference(arr) {
    // Write your code here
    let sum1 = 0
    let sum2 = 0
    for ( let i = 0; i < arr.length; i++){
        //sum of first diagonal with increase of index for every array
        sum1 += arr[i][i]
        //sum of second diagonal reversed
        sum2 += arr[arr.length - 1 - i][i]
    }
    return Math.abs(sum1-sum2)
}