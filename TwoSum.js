// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.




const twoSum = (nums, target)=> {
    for (let i = 0; i < nums.length; i++){
        let secondInt = target - nums[i]
        
        for(x = 0; x < nums.length; x++){
            if(i != x && nums[x] == secondInt){
                return [i, x]
            }
        }
    }
    
};