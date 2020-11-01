/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Gaggi', 'Furzi', 'Bisi', 'Mongo', 'Saich'];
        this.activePhrase = null
    }

    /**
     * Starts the game. Hides start screen and sets the phrase.
     */
    startGame() {
        // Hide start screen overlay
        // TODO Hide start screen overlay
        document.getElementById('overlay').style.display = 'none';

        // get a random phrase and set activePhrase property
        this.activePhrase = this.getRandomPhrase();
    }

    /**
     * Gets a random phrase from the phrases array, creates a new Phrase and returns it.
     * @returns {Phrase}
     */
    getRandomPhrase() {
        const rand = Math.ceil(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[rand]);
    }


    handleInteraction() {

    }

    /**
     * Updates the Heart pcutres to show how many tries are left.
     * Counts up 'missed' property to keep track of tries.
     */
    removeLife() {
        const scoreboard = document.getElementsByClassName('tries');
        // Replace last heart with empty heart.
        scoreboard[scoreboard.length-this.missed-1].getElementsByTagName('img')[0].src = 'images/lostHeart.png'
        // count up missed property
        this.missed += 1;

        if(this.missed === 5) {
            this.gameOver();
        }
    }

    checkForWin() {}

    /**
     * Called at the end of the Game. Shows win / lose message.
     */
    gameOver() {
        const h1 = document.getElementById('game-over-message');
        document.getElementById('overlay').style.display = 'block';
        if(this.missed === 5) {
            // Lost
            h1.textContent = 'Sry, you\'ve lost the game!';
        }
        else {
            h1.textContent = 'Well done! Game won.';
        }
    }
}