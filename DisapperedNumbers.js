


var findDisappearedNumbers = function(nums) {
    let sorted = nums.sort()
    var res = [];
    for(let i=nums[0];i<nums.length+1;i++){
        console.log(sorted.indexOf(i))
        if(sorted.indexOf(i)===-1){
            
            res.push(i)
        }
    }
    return res
};