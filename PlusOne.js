

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4]

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

const plusOne = (digits) => {
    //     const last = digits[digits.length - 1]
    //     const result = digits[digits.length - 1] +1
        
    //     // console.log(last)
    //     if(last === 9){
    //         digits.splice(digits.length - 1, 1, 1, 0)
    //     }else(digits.splice(digits.length - 1, 1, result))
    
    //     return digits
        for (let i = digits.length-1; i >= 0; i--){
            if(digits[i] === 9){
                digits[i] = 0
            }else{
                digits[i]++
                // console.log(digits)
                return digits
            }
        }
        return [1,...digits]
    };