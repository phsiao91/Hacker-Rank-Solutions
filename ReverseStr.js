// Given a string s and an integer k, reverse the first k characters 
// for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, 
// then reverse the first k characters and leave the other as original.


// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"


// Input: s = "abcd", k = 2
// Output: "bacd"

const reverseStr = (s, k) => {
    let str = ""
    for(let i = 0; i < s.length; i +=k){
        if((i/k) % 2 == 0){
            str += [...s.substr(i,k)].reverse().join("")
        }else{
            str += s.substr(i,k)
        }
    }
    return str
};