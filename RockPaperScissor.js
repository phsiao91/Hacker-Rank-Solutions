


function game(p1, p2) {
    //r beats s, s beats p, p beats r
    if(p1 === "rock") {
        if(p2 === "rock"){
            return "draw"
        }
        if (p2 === "paper"){
            return "p2 won"
        }
        if (p2 === "scissors"){
            return "p1 won"
        }
    }
    if(player1 === "paper") {
        if(p2 === "rock"){
            return "p1 won"
        }
        if (p2 === "paper")
            return "draw"
        }
        if (p2 === "scissors"){
            return "p2 won"
        }
    }
    if(player1 === "scissors") {
        if(p2 === "rock"){
            return "p2 won"
        }
        if (p2 === "paper"){
            return "p1 won"
        }
        if (p2 === "scissors"){
            return "draw"
        }
    }
}


function rps(p1, p2) {
    if (p1 == p2) return "Draw";

    if (p1 == "rock" && p2 == "scissors") 
        return "P1 won"
    else if (p1 == "paper" && p2 == "rock") 
        return "P1 won"
    else if (p1 == "scissors" && p2 == "paper") 
        return "P1 won"
    else
        return "P2 won"
}