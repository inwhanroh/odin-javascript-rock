let options = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playerSelection() {
    while (true) {
        let choice = prompt(`Your play: ${options}`)
        if (choice != null && choice.length > 1) {
            let choice_proper = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
            if (options.includes(choice_proper)) {
                return choice_proper;
            }
        }
    }
}

function playRound(player, computer) {
    let player_choice = player();
    let computer_choice = computer();
    let difference = options.indexOf(player_choice) - options.indexOf(computer_choice);
    if (difference == 0) {
        console.log(`Tied! ${player_choice} ties with ${computer_choice}`)
        return 0;
    } else if (difference == 1 || difference == -2) {
        console.log(`You Win! ${player_choice} beats ${computer_choice}`)
        return 1;
    } else {
        console.log(`You Lose! ${computer_choice} beats ${player_choice}`)
        return -1;
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        score += playRound(playerSelection, getComputerChoice);
    }
    if (score > 0) {
        console.log("Congratulations, you won!")
    } else if (score == 0) {
        console.log("It's a tie!")
    } else {
        console.log("Unfortunately, you lost.")
    }
}

game();