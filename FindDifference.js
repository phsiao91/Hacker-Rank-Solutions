




const findTheDifference = (s, t) => {
    let tChars = t.split("").sort()
    let sChars = s.split("").sort()
    let u = [];
    // console.log(tChars)
    // console.log(sChars)
    for(let i = 0; i < t.length; i++){
        if(tChars[i] !== sChars[i]){
            u.push(tChars[i])
        }
    }
    return u[0]
};