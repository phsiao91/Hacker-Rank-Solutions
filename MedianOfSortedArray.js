


const findMedianSortedArrays = (nums1, nums2) => {
    let arr = nums1.concat(nums2).sort()
    // console.log(arr)
    // sum = 0
    let l = arr.length
    let median = 0
    if (arr.length == 1){
        return arr
    }
    for (let i = 0; i< arr.length; i++){
        // sum  += arr[i]
        if (arr.length % 2 === 0){
            median = (arr[l/2] + arr[l/2 -1]) / 2
        }
        else {
            median = (arr[Math.round(l/2)] -1)
        }
    }
    return median
};