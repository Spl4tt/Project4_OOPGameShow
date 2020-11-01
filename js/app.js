/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnStartGame = document.getElementById('btn__reset');

btnStartGame.addEventListener('click', (e) => {
    const game = new Game();
    game.startGame();
})