// Given five positive integers, 
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// arr = [1, 3, 5, 7, 9]
// min sum is 1+3+5+7 = 16
// max sum is 3+5+7+9 = 24
// Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

function miniMaxSum(arr) {
    //lets find the sum of the array
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    //find the min and max and subtract it
    const max = sum - Math.min(...arr)
    const min = sum - Math.max(...arr)
    
    console.log(min + " " + max)
}
/* hjhjh */
