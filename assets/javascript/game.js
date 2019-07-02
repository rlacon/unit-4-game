var matchScore = 0;
var wins = 0;
var losses = 0;
var totalScore = 0;
var blueGem = 0;
var yellowGem = 0;
var redGem = 0;
var purpleGem = 0;

//---------------BEGIN GAME---------------//
function resetGame() {
    matchScore = 0;
    totalScore = 0;
    blueGem = 0;
    yellowGem = 0;
    redGem = 0;
    purpleGem = 0;
    $('#score-text').text(matchScore);
    console.log(matchScore);

    blueGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    redGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
    matchScore = Math.floor(Math.random() * 120) + 19;

    $('#score-text').text(matchScore);
    console.log(matchScore);
};

function gameConditions() {
    if (totalScore === matchScore) {
        wins++;
        $('#wins-text').text(wins);
        resetGame();
    } else if (totalScore > matchScore) {
        losses++;
        $('#losses-text').text(losses);
        resetGame();
    }
};

// A $( document ).ready() block.
$(document).ready(function () {
    console.log("ready!");

    // The crystals need a value upon page load (The multiply symbol is the max and the plus is the min.)

    blueGem = Math.floor(Math.random() * 12) + 1;
    yellowGem = Math.floor(Math.random() * 12) + 1;
    redGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
    matchScore = Math.floor(Math.random() * 120) + 19;

    $('#score-text').text(matchScore);
    console.log(matchScore);




    // Clicking button will generate a random number between 1-12
    // All the gems are now equal to numbers from now on 
    $("#blue-gem").on("click", function () {
        totalScore = blueGem + totalScore;
        console.log(totalScore);
        $('#total-score-text').text(totalScore);
        gameConditions();
    });

    $("#yellow-gem").on("click", function () {
        totalScore = yellowGem + totalScore;
        console.log(totalScore);
        $('#total-score-text').text(totalScore);
        gameConditions();
    });

    $("#purple-gem").on("click", function () {
        totalScore = purpleGem + totalScore;
        console.log(totalScore);
        $('#total-score-text').text(totalScore);
        gameConditions();
    });

    $("#red-gem").on("click", function () {
        totalScore = redGem + totalScore;
        console.log(totalScore);
        $('#total-score-text').text(totalScore);
        gameConditions();
    });
    //---------------WIN/LOSE GAME---------------//

});
//---------------GAME INSTRUCTIONS---------------//


//   * There will be four crystals displayed as buttons on the page.

// * The player will be shown a random number at the start of the game.

// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//   * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.

// * The player wins if their total score matches the random number from the beginning of the game.

// * The player loses if their score goes above the random number.

// * The game restarts whenever the player wins or loses.

//   * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//---------------GAME DESIGN NOTES---------------//

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.