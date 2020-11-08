/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const btnStartGame = document.getElementById('btn__reset');

// clickevent listener for the start button on the start overlay. Initiates the game.
btnStartGame.addEventListener('click', (e) => {
    game.startGame();
})

// Clickevent listener for the onscreen keyboard that calls the handleInteraction() function on the game object
const keys = document.getElementsByClassName('key');
for(const key of keys) {
    key.addEventListener('click', () => game.handleInteraction(key));
}

// Keydown event for the physical keyboard
document.addEventListener('keydown', (e) => {
    // Check if a letter was pressed
    if(e.code.startsWith('Key', 0)) {
        // get the onscreen button for the handleInteraction() function and call it
        const keys = document.getElementsByClassName('key');
        for(const key of keys) {
            if(key.textContent.toLowerCase() === e.code.charAt(e.code.length-1).toLowerCase()) {
                if(!key.disabled) {
                    game.handleInteraction(key);
                }
            }
        }
    }
});