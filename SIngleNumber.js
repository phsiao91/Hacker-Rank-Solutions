
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


const singleNumber = (nums) => {
    const ht = {}
    for(const num of nums){
        ht[num] = ht[num] +1 || 1
    }
    for(const key in ht){
        console.log(key)
        console.log(ht[key])
        if(ht[key] === 1){
            return key
        }
    }
};