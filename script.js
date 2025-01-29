document.getElementById("rollButton").addEventListener("click", function() {
    let numDice = document.getElementById("numDice").value; // Get number of dice
    let diceResults = document.getElementById("diceResults"); // Get results area
    let totalDisplay = document.getElementById("total"); // Get total area
    let total = 0; // Start total at 0

    // Dice face images
    const diceFaces = [
        "⚀", // 1
        "⚁", // 2
        "⚂", // 3
        "⚃", // 4
        "⚄", // 5
        "⚅"  // 6
    ];

    diceResults.innerHTML = ""; // Clear previous results

    for (let i = 0; i < numDice; i++) {
        let roll = Math.floor(Math.random() * 6); // Generate a random number (0-5)
        total += roll + 1; // Add to total (since array starts at 0)

        // Create a div to display each die result
        let die = document.createElement("div");
        die.textContent = diceFaces[roll]; // Get dice face
        die.style.display = "inline-block";
        die.style.margin = "10px";
        die.style.fontSize = "50px"; // Bigger dice!
        die.style.padding = "10px";
        die.style.border = "2px solid black";
        die.style.borderRadius = "10px";
        die.style.backgroundColor = "white";

        diceResults.appendChild(die); // Add die result to page
    }

    totalDisplay.textContent = total; // Show the total sum
});