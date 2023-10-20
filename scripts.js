let options = ['Rock', 'Paper', 'Scissors'];
const button_choice = document.querySelectorAll('button');
let player_score = 0;
let computer_score = 0;

const scores = document.querySelector('.scores')
const show_text = document.querySelector('.container')
let display = document.createElement('div')
let p_score = document.createElement('div')
p_score.textContent = `Player Score: 0`
let c_score = document.createElement('div')
c_score.textContent = `Computer Score: 0`
let final_score = document.createElement('div')

scores.appendChild(p_score)
scores.appendChild(c_score)
show_text.appendChild(display);
show_text.appendChild(final_score)

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(player_choice, computer) {
    let computer_choice = computer();
    let difference = options.indexOf(player_choice) - options.indexOf(computer_choice);
    if (difference == 0) {
        display.textContent = `Tied! ${player_choice} ties with ${computer_choice}`
        return 0;
    } else if (difference == 1 || difference == -2) {
        display.textContent = `You Win! ${player_choice} beats ${computer_choice}`
        return 1;
    } else {
        display.textContent = `You Lose! ${player_choice} loses to ${computer_choice}`
        return -1;
    }
}

function game() {
    if (player_score < 5 && computer_score < 5) {
        let score = playRound(this.textContent, getComputerChoice);
        if (score == 1) {
            player_score += 1
            p_score.textContent = `Player Score: ${player_score}`
        } else if (score == -1) {
            computer_score += 1
            c_score.textContent = `Computer Score: ${computer_score}`
        }
        if (player_score == 5) {
            final_score.textContent = "Congratulations, you won the game!"
        } else if (computer_score == 5) {
            final_score.textContent = "Unfortunately, you lost the game."
        }
    }
}



button_choice.forEach((button) => {button.addEventListener('click', game)});
