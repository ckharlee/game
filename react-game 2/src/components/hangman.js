var words_to_be_guess = 
[
    "play",
    "whom",
    "nice"


]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus =null;

export function randomWord() {
    answer = words_to_be_guess[Math.floor(Math.random() * words_to_be_guess.length)];

}

function generateButtons() {
    let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split('').map(letter =>
    `    
        <button
            class="btn btn-lg btn-primary m-2"
            id= '`+ letter +`'
            onClick= "handleGuess('` + letter + `')"
            >
            ` + letter + `
            </button>
        `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}
  function holdGuess(chosenLetter){
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled',true);

    if (answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkIfGameWon();
    }
    else if (answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkIfGameLost();
        upddateHangmanPicture();
    }
}

function upddateHangmanPicture(){
document.getElementById('hangmanPic').src = './images/Hangman/' + mistakes + '.png';

}

function checkIfGameWon() {
    if (wordStatus === answer){
        document.getElementById('keyboard').innerHTML = 'You Won!!!';
    }
}

function checkIfGameLost() {
    if (mistakes === maxWrong){
        document.getElementById('wordSpotLight').innerHTML = 'The answer was : ' + answer;
        document.getElementById('keyboard').innerHTML = 'You Lost!!!';
    }
}

function guessedWord(){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter : " _ ")).join('');

    document.getElementById('wordSpotLight').innerHTML = wordStatus;
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes;

}
function reset (){
    mistakes = 0;
    guessed = []
    document.getElementById('hangmanPic').src = './images/Hangman/0.png';

    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();