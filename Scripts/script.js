30// Sort Menu by Price
const sortButton = document.getElementById("sort-button");
sortButton.addEventListener("click", function () {
    const table = document.getElementById("menu-table");
    const tbody = table.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));

    rows.sort((rowA, rowB) => {
        const priceA = parseFloat(rowA.querySelector(".price").textContent.replace("$", ""));
        const priceB = parseFloat(rowB.querySelector(".price").textContent.replace("$", ""));
        return priceA - priceB;
    });

    rows.forEach(row => tbody.appendChild(row));
});

// Toggle Show/Hide Specials
const toggleButton = document.getElementById("toggle-specials");
const specialsList = document.getElementById("specials");
toggleButton.addEventListener("click", function () {
    if (specialsList.style.display === "none") {
        specialsList.style.display = "block";
    } else {
        specialsList.style.display = "none";
    }
});

// Alert Button
const alertButton = document.getElementById("alert-button");
alertButton.addEventListener("click", function () {
    alert("Welcome to Moana's Kitchen! Enjoy our delicious Indian dishes.");
});

// Hover Button
const hoverButton = document.getElementById("hover-button");
hoverButton.addEventListener("mouseover", function () {
    hoverButton.textContent = "You're hovering! Order now!";
});
hoverButton.addEventListener("mouseout", function () {
    hoverButton.textContent = "Hover for a surprise!";
});

// Incrementing Button
let counter = 0;
const incrementButton = document.getElementById("increment-button");
const counterDisplay = document.getElementById("counter-display");
incrementButton.addEventListener("click", function () {
    counter++;
    counterDisplay.textContent = counter;
});

// If-Else Use Case (Spicy Dish Warning)
const spicyButton = document.getElementById("spicy-button");
spicyButton.addEventListener("click", function () {
    const isSpicy = confirm("Are you okay with spicy food?");
    if (isSpicy) {
        alert("Great! Try our Chicken Tikka Masala.");
    } else {
        alert("No worries! Our Butter Chicken is mild and flavorful.");
    }
});

// For Loop Use Case (Dish List Logging)
const logButton = document.getElementById("log-dishes");
logButton.addEventListener("click", function () {
    const dishNames = ["Butter Chicken", "Chicken Tikka Masala", "Palak Paneer", "Dal Makhani", "Chicken Biryani"];
    for (let i = 0; i < dishNames.length; i++) {
        console.log(`Dish ${i + 1}: ${dishNames[i]}`);
    }
});
