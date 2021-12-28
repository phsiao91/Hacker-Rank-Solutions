



const removeElement = (nums, val) => {
    let result = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[result++] = nums[i]
            // nums.splice(nums[i])
        }
    }
    // console.log(nums)
    // return result
    return result
};