// JavaScript for the Clicking Game

let clicks = 0;           // Track the number of clicks
let timeLeft = 10;        // Track the remaining time in seconds
let gameInterval;         // Store the interval ID for updating the game timer

// Get references to the HTML elements
const clickButton = document.getElementById('click-button');
const statusDiv = document.getElementById('status');

// Function to start the game
function startGame() {
    clicks = 0;            // Reset the click count
    timeLeft = 10;         // Reset the time left
    clickButton.disabled = false;  // Enable the click button
    updateStatus();        // Update the status display
    gameInterval = setInterval(updateGame, 1000);  // Start the timer
}

// Function to update the game status
function updateGame() {
    timeLeft--;            // Decrease the time left by 1 second
    updateStatus();        // Update the status display

    if (timeLeft <= 0) {   // Check if the time has run out
        clearInterval(gameInterval);  // Stop the timer
        clickButton.disabled = true;  // Disable the click button
        statusDiv.textContent += ' | Game Over!';  // Append game over message
    }
}

// Function to update the status display
function updateStatus() {
    statusDiv.textContent = `Clicks: ${clicks} | Time Left: ${timeLeft}`;
}

// Add click event listener to the button
clickButton.addEventListener('click', () => {
    clicks++;              // Increment the click count
    updateStatus();        // Update the status display
});

// Start the game when the page loads
startGame();
