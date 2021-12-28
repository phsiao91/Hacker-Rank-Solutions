


const searchInsert = (nums, target) => {
    // let index = 0
    // console.log(nums.length)
    for(let i = 0; i < nums.length; i++) {
        if(target <= nums[i]){
            return i
        }
        // else if(nums[i] > target ){
        //     index = i -1
        // }
    }
    console.log(nums.length)
    return nums.length
};