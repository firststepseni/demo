'use strict';
const number = math.trunc(math.random()*20)+1;
document.querySelector('.check').addEventListener('click'),function ( )
{
    const guess = number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'no mumber!';
    else
        if (guess === secretnumber) {
            document.querySelector('.message').textContent = 'correct number!';
        } else if (guess > secretnumber) {

            if(score > 0 ) {
                document.querySelector('.message').textContent = "too high";
                score--;
                document.querySelector('.message').textContent = score;
            else
                {
                    document.querySelector('.message').textContent = 'u lost the game';
                }
            }

        } else if (guess < secretnumber) {
            document.querySelector('.message').textContent = 'too low';
        }
        score--;
        document.querySelector('.score').textContent = score;
    }

}}

}








