// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// Input: num = 7
// Output: false

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
// A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.




const checkPerfectNumber = (num) => {
    if(num == 1){
        return false
    }
    let sum = 1
    for( let i = 2; i <= num/2; i++){
        if(num % i == 0){
            sum += i
        }
    }
    console.log(sum)
    return( sum === num)
};


// const multiples = (n) => {
//     let result = 0
//     for(let i = 1; i <=10; i++){
//         result = n*i
//         console.log(n, "x", i ,"=", result)
//     }
// }

