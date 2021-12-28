


const removeDuplicates = (arr) =>{
    
    nums = nums.filter((e,i,a) => e !== a[i-1])
}; 

const remDup = (arr) => {
    let uniqueArr=[]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i+1]){
            uniqueArr.push(arr[i])
        }
    }
    return arr
}