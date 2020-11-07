/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const btnStartGame = document.getElementById('btn__reset');

btnStartGame.addEventListener('click', (e) => {
    game.startGame();
})

const keys = document.getElementsByClassName('key');
for(const key of keys) {
    key.addEventListener('click', () => game.handleInteraction(key));
}

