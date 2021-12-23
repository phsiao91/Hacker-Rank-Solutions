//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.


const isPalindrome = (x) => {
    let str = x.toString().split("").reverse().join("")
    let int = parseInt(str)
    return(x === int)
    // console.log(typeof(int))
};