let min = 1
    max = 10
    winningNum = 2
    guessesLeft = 3

const guessBtn = document.querySelector('#guessBtn');
      guessInput = document.querySelector('#guessInput'); 
      maxNum = document.querySelector('.max-num');
      minNum = document.querySelector('.min-num') ;
      message = document.querySelector('#message');

minNum.textContent = min
maxNum.textContent = max      

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value)

    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red")
    }
    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct, YOU WIN!`)
    } else {
        guessesLeft--
        setMessage(`${guess} is not correct, You've ${guessesLeft} left`, "red") ;
        if(guessesLeft === 0) {
            gameOver(false, `Game Over, You Lost, The correct number was ${winningNum}`)
        }
    }
    console.log(123);
    guessInput.focus()

})
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color='red'

    guessInput.disabled = true
    guessInput.style.borderColor = color
    guessInput.style.color = color

    setMessage(msg)
}
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}