


const removeDuplicates = (arr) =>{
    
    nums = nums.filter((e,i,a) => e !== a[i-1])
}; 

const remDup = (arr) => {
    let arr=[]
    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i+1]){
            arr.push(nums[i])
        }
    }
    return arr
}