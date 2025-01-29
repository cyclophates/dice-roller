document.getElementById("drawCardButton").addEventListener("click", function() {
    const suits = ["♥", "♦", "♣", "♠"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const card = `${randomValue}${randomSuit}`;
    const cardResult = document.getElementById("cardResult");
    cardResult.textContent = `You drew: ${card}`;
    cardResult.style.fontSize = "30px";
    cardResult.style.marginTop = "20px";
    cardResult.style.color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
});
