
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


// Input: nums = [1,0,1,1,0,1]
// Output: 2


const findMaxConsecutiveOnes = function(nums) {
    let largestCount = 0
    let currentCount = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            currentCount = 0
        }else{
            currentCount++
        }
        if(currentCount > largestCount) largestCount = currentCount
    }
    return largestCount
};