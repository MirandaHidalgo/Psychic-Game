var computerGuess;
var userGuessLog = []
var attempts = 0

function newGame() {
    window.location.reload()
}

function init () {
    computerGuess = Math.floor(Math.random() * 100 + 1);
    //console.log(computerGuess);//

}

function compareGuess() {
    var userGuess = " " + document.getElementById('userGuess').value;
    //console.log(userGuess);//

    userGuessLog.push(userGuess)
    //console.log(userGuessLog);//
    document.getElementById('guessLog').innerHTML = userGuessLog;

    attempts++; 
    document.getElementById('numberofattempts').innerHTML = attempts;


    if(userGuess > computerGuess) {
    document.getElementById('textOutput').innerHTML = 'Your guess is too high!';
    document.getElementById('userGuess').value = "";
    } else if (userGuess < computerGuess) {
        document.getElementById('textOutput').innerHTML = 'Your guess is too low!';
        document.getElementById('userGuess').value = "";
    } else {
        document.getElementById('textOutput').innerHTML = 'Correct!';
    }
}

