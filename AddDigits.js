// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.



const addDigits = (num) => {
    return 1+(num-1) % 9
};

// const add = (num) => {

// }

function add(num) {
    let numSplitRet = numSplit(num);
    let numSplitSumRet = numSplitSum(numSplitRet);
    // base case:
    if (numSplitSumRet < 10) return numSplitSumRet;
    // recursive case
    function numSplit(num) {
        return num.toString().split("");
    }
    function numSplitSum(arr) {
        return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    return addDigits(numSplitSumRet);
    }