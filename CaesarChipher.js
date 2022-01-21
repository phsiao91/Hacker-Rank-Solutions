


const caesarCipher = (str, num) => {
    num = num % 26
    let lowerCaseStr = str.toLowerCase()
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    let result = ""

    for(let i = 0; i < lowerCaseStr.length; i ++){
        let currentLetter = lowerCaseStr[i]
        if(currentLetter === " "){
            result += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter)

        let newIndex = currentIndex + num
        
        if(newIndex > 25) newIndex = newIndex - 26
        if(newIndex < 0) newIndex = newIndex + 26
        if(str[i] === str[i].toUpperCase()){
            result += alphabet[newIndex].toUpperCase()
        }
        else result += alphabet[newIndex]
    }
    return result
}