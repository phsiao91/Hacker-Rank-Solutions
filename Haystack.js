


var strStr = function(haystack, needle) {
    if(!needle.length) return 0
    if(haystack === needle) return 0
    
    for (let i = 0; i <= haystack.length-needle.length ; i++){
        if(needle === haystack.substring(i, i + needle.length)){
            return i
        }
    }
    return -1
};