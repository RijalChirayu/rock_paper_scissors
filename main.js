function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0){
        return "ROCK"
        
    }else if (randomNumber === 1){
        return "SCISSORS"
    }else {
        return "PAPER"
    }
}

function getUserChoice(){
    let userChoice = window.prompt("Enter your Choice: ROCK|PAPER|SCISSORS" , "ROCK")
    userChoice = userChoice.toUpperCase()
    return userChoice
}

let playerScore = 0 
let computerScore = 0 

function playRound(playerChoice , computerChoice){
    console.log(`Human Choice: ${playerChoice} | Computer Choice: ${computerChoice}`)

    if (playerChoice === computerChoice){
        console.log(`Round Ended in draw!, Player Score:${playerScore} | Computer Score:${computerScore}`)

    }else if (playerChoice === "SCISSORS" && computerChoice === "PAPER"){
        playerScore += 1
        console.log(`Player won!, Player Score:${playerScore} | Computer Score:${computerScore}`)

    }else if (playerChoice === "ROCK" && computerChoice === "SCISSORS"){
        playerScore += 1
        console.log(`Player won!, Player Score:${playerScore} | Computer Score:${computerScore}`)
        
    }else if (playerChoice === "PAPER" && computerChoice === "ROCK"){
        playerScore += 1 
        console.log(`Player won!, Player Score:${playerScore} | Computer Score:${computerScore}`)
    }else {
        computerScore += 1 
        console.log(`Computer won!, Player Score:${playerScore} | Computer Score:${computerScore}`)
    }
}

function playGame(){
    let numberOfPlays = Number(window.prompt("How many rounds would you like to play?" , 5))
    for (let i = 0 ; i < numberOfPlays ; i ++){
        playRound(getUserChoice() , getComputerChoice())
    }
}
playGame()