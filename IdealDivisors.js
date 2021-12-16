
// Find the number of ideal integers within the given segment [low,high] inclusive. 
// An ideal number is a positive integer that has only 3 and 5 as prime divisors. 
// An ideal number can be expressed in the form of 3^x*5^y, where x and y are non-negativeintegers. 
// For example,15,45 and 75 are ideal numbers but 6,10,21 are not .



function idealNumbers(low, high){

    let n = 0 //counter

    for (let i = low; i <= high; i++){
        let num = i
        while(num % 3 === 0)
        num /= 3
        while(num % 5 === 0)
        num /= 5

        // If num got reduced to 1 then it has
        // only 3 and 5 as prime factors
        if(num == 1)
        n++
    }
    return n



}