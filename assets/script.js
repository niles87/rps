var options = ['r', 'p', 's']
var stats = {
    wins: 0,
    losses: 0,
    draws: 0
}

function gameLoop() {
    // normalize player input by calling lowercase
    var playerChoice = prompt("Pick r, p, or s").toLowerCase();
    // if the player doesn't choose an appropriate value start loop over again until they do
    if (!options.includes(playerChoice)) {
        alert("Must choose r, p, or s")
        gameLoop()
    }
    // randomly choose an index value, use array length incase we choose to expand options in the future
    var computerChoice = options[Math.floor(Math.random() * options.length)]

    // string template to inject variables easier
    alert(`computer chose ${computerChoice}`)

    if (playerChoice == computerChoice) {
        stats.draws += 1
        alert("Draw!")
    } else if (
        (playerChoice == 'r' && computerChoice == 's') ||
        (playerChoice == 's' && computerChoice == 'p') ||
        (playerChoice == 'p' && computerChoice == 'r')
    ) {
        stats.wins += 1
        alert("You win!")
    } else {
        stats.losses += 1
        alert("You lost!")
    }
    alert(`wins: ${stats.wins}\nlosses: ${stats.losses}\ndraws: ${stats.draws}`)

    var playAgain = confirm("Play again?")

    // return a boolean for while loop check
    return playAgain
}

// event listener callback function
function startGame() {
    // variable for game loop to repeat
    var playGame = true;

    while (playGame) {
        playGame = gameLoop()
    }
    // Zero out stats object and restart
    stats.draws = 0
    stats.losses = 0
    stats.wins = 0
    alert("Thanks for playing!")
}

// any id in an html document can be accessed with its name as long as it fits the
// criteria for a javascript variable name, for example no hyphens or leading numbers
// add a click event to the button to start the game!
startBtn.addEventListener("click", startGame) 