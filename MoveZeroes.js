//move all zeroes to the end of a given array




const moveZeroes = (nums) => {
    // let zeroArr = []
    for (let i = nums.length-1; i >= 0; i--){
        if (nums[i] === 0){
            // zeroArr.push(nums[i])
            nums.splice(i,1)
            nums.push(0)
        }
    }
    // console.log(zeroArr)
    return nums
};