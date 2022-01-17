


const firstUniqChar = (s) => {
    let ht = {}
    let unique;
    for(const str of s){
        ht[str] = ht[str] +1 || 1
    }
    for(const key in ht){
        if(ht[key] === 1){
            unique = key
            break;
        }
    }
    for(let i = 0; i < s.length; i ++){
        if(s[i] == unique){
            return i
        }
    }
    // console.log(unique)
    return -1
};