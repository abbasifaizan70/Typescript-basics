"use strict";
/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
var alien_color = 'green';
function calculatePoints(color) {
    if (color === 'green') {
        console.log('player earned 5 points.');
    }
    else if (color === 'red') {
        console.log('player earned 15 points.');
    }
    else if (color === 'yellow') {
        console.log('player earned 10 points.');
    }
}
// when color is green
calculatePoints(alien_color);
// when color is red
alien_color = 'red';
calculatePoints(alien_color);
// when color is yellow
alien_color = 'yellow';
calculatePoints(alien_color);
module.exports = {};
