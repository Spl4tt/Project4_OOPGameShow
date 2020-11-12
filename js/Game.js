/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    suppressKeyInput = false;
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase('Phrase'), new Phrase('Magic'), new Phrase('A long word'), new Phrase('Skyline'), new Phrase('Truth')];
        this.activePhrase = null
    }

    /**
     * Starts the game. Hides start screen and sets the phrase.
     */
    startGame() {
        // Hide start screen overlay
        document.getElementById('overlay').style.display = 'none';

        // get a random phrase and set activePhrase property
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhrasetoDisplay();
    }

    /**
     * Gets a random phrase from the phrases array, creates a new Phrase and returns it.
     * @returns {Phrase}
     */
    getRandomPhrase() {
        const rand = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[rand];
    }


    /**
     * Called when a onscreen key or keyboard key is pressed.
     * Handles the disabling of the key and the check if the key was matched.
     *
     * @param button
     */
    handleInteraction(button) {
        // Disable on screen button
        button.disabled = true;

        if(this.activePhrase !== null) {
            if (this.activePhrase.checkLetter(button.textContent)) {
                // if selected letter was correct: add 'chosen' class to the on screen keyboard letter and call showMatchedLetter()
                button.classList.add('chosen');
                this.activePhrase.showMatchedLetter(button.textContent);
            } else {
                // if selected letter was wrong: add 'wrong' class to the on screen keyboard letter and call removeLife()
                button.classList.add('wrong');
                this.removeLife();
            }

            // Check if the player has won (checkForWIn()) and call gmaeOver()
            if (this.checkForWin()) {
                this.gameOver();
            }
        }
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

        // Call gameOver() if player lost all lives
        if(this.missed === 5) {
            this.gameOver();
        }
    }

    /**
     * Checks if the game has been won by checking,
     * if the count of elements with the 'show' tag equals the count of phrase letters
     *
     * @returns {boolean}
     */
    checkForWin() {
        const matchedLetters = document.getElementsByClassName('show');
        return matchedLetters.length === this.activePhrase.phrase.replaceAll(' ', '').length;
    }

    /**
     * Called at the end of the Game. Shows win / lose message.
     */
    gameOver() {
        // Supress key input at the end screen
        this.suppressKeyInput = true;
        const h1 = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
        if(this.missed === 5) {
            // Lost
            h1.textContent = 'Sry, you\'ve lost the game!';
            overlay.className = 'lose';
        }
        else {
            h1.textContent = 'Well done! Game won.';
            overlay.className = 'win';
        }
    }

    /**
     * Resets the game, so that a new game can be started without old data interfering
     */
    resetGame() {
        // remove all old 'li' - make space for a new phrase
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        ulPhrase.innerHTML = '';

        // reset onscreen keyboard by enabling it and reseting the class to 'key'
        const keys = document.getElementsByClassName('key');
        for(const key of keys) {
            key.disabled = false;
            key.className = 'key';
        }
        // Re-enable the keyinputs
        this.suppressKeyInput = false;
        // Refill hearts and set missed back to zero
        const hearts = document.getElementsByClassName('tries');
        for(const heart of hearts) {
            heart.getElementsByTagName('img')[0].src = 'images/liveHeart.png'
        }
        this.missed = 0;
    }
}