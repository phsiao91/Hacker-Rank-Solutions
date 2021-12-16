



function idealNumbers(low, high){

    let n = 0 //counter

    for (let i = low; i <= high; i++){
        let num = i
        while(num % 3 === 0)
        num /= 3
        while(num % 5 === 0)
        num /= 5

        // If num got reduced to 1 then it has
        // only 3 and 5 as prime factors
        if(num == 1)
        n++
    }
    return n



}