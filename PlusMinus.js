// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. 
// The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Example
// arr = [1,1,0,-1,-1]
// pos integers = 2
// neg integers = 2
// zero integers = 1
// ratio = pos/arr.length
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

// 0.400000
// 0.400000
// 0.200000


function plusMinus(arr) {
    // Write your code here
    // const {pos, neg, zer} = arr.reduce((acc, num) => {
    //     if (num > 0)
    //     acc.pos ++;
    //     else if (num < 0)
    //     acc.neg ++;
    //     else if (num === 0)
    //     acc.zer ++;
    //     return acc
    //     },{ pos:0, neg:0, zer:0
    //     });
    
    // console.log(parseFloat(pos / (pos + neg + zer)).toFixed(6))
    // console.log(parseFloat(neg / (pos + neg + zer)).toFixed(6))
    // console.log(parseFloat(zer / (pos + neg + zer)).toFixed(6))
    
    let pos = 0
    let neg = 0
    let zer = 0
    let l = arr.length  
    
    for (let i = 0; i < l; i++) {
        let value = arr[i]
        if (value < 0){
            neg += 1
        }
        else if (value > 0) {
            pos += 1
        } 
        else zer += 1
    }
    let posRatio = pos / l
    let negRatio = neg / l
    let zerRatio = zer / l
    
    
        console.log(posRatio),
        console.log(negRatio),
        console.log(zerRatio)

}