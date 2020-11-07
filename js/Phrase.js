/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Adds the Phrase to the Game as hidden fields.
     */
    addPhrasetoDisplay() {
        // Get the 'ul'
        const ulPhrase = document.getElementById('phrase').firstElementChild;
        // Loop through all letters in the phrase and add them to the 'ul' as 'li' Elements with all correct classes.
        for(const letter of this.phrase) {
            const li = document.createElement('li');
            if(letter === ' ') {
                li.setAttribute('class', `space`)
                li.textContent = ' ';
            }
            else {
                li.setAttribute('class', `hide letter ${letter}`)
                li.textContent = letter;
            }
            ulPhrase.appendChild(li);
        }
    }

    /**
     * Checks if the selected letter is included in the phrase.
     * Returns true if it's included
     *
     * @param selectedLetter
     * @returns {boolean}
     */
    checkLetter(selectedLetter) {
        return this.phrase.includes(selectedLetter);
    }

    /**
     * Changes the class of the matched letters to 'show'
     *
     * @param selectedLetter
     */
    showMatchedLetter(selectedLetter) {
        const matchedLetters = document.getElementsByClassName(selectedLetter);
        for(const element of matchedLetters) {
            element.classList.replace('hide', 'show');
        }
    }
}