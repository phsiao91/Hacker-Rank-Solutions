// Given a string s consisting of some words separated by some number of spaces, 
// return the length of the last word in the string.


const lengthOfLastWord = (s) => {
    let arr = s.split(" ")
    let l = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== ""){
            // console.log(arr[i].length)
            l.push(arr[i])
        }
    }
    return l[l.length-1].length
};




const lengthOfLastWord = (s) => {
    let word = s.trim().split(" ")
    return word[word.length-1].length
};