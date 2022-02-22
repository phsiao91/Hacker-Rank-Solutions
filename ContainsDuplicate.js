


var containsDuplicate = function(nums) {
    let sorted = nums.sort()
    
    for(let i = 0; i < nums.length; i++){
        if(sorted[i] == sorted[i+1]){
            return true
        }
    }
    return false
};