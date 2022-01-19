


// var findContentChildren = function(g, s) {
//     let gSort = g.sort()
//     let sSort = s.sort()
//     // let j = 0
//     let count = 0

//     for(let i = 0; i < g.length; i++){
//         for(let j = 0; j < g.length; j++){
//             if(s[i] == g[j]){
//                 count++
//             }
//         }
//     }
//     return count
// };

var findContentChildren = function(g, s) {
    let count = 0
    let j = 0
    g.sort((a,b) => a-b)
    s.sort((a,b) => a-b)
    
    for( let cookieSize of s){
        if( cookieSize >= g[j]){
            count++
            j++
        }
    }
    return count
};