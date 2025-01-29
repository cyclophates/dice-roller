document.getElementById("generateNumberButton").addEventListener("click", function() {
    const min = parseInt(document.getElementById("minValue").value);
    const max = parseInt(document.getElementById("maxValue").value);

    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Please enter valid numbers where Min is less than or equal to Max.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const resultDiv = document.getElementById("randomNumberResult");
    resultDiv.textContent = `Random Number: ${randomNumber}`;
    resultDiv.style.fontSize = "30px";
    resultDiv.style.marginTop = "20px";
});
