// Part 1: Sanity Check
console.log("JavaScript is connected!");

// Part 3: Footer with Dynamic Date and Today's Date
const footer = document.getElementById("footer");
const currentDate = new Date();

// Format the full date for display
const options = { year: "numeric", month: "long", day: "numeric" }; // Customize as needed
const fullDate = currentDate.toLocaleDateString("en-US", options);

// Add the current time
const currentTime = currentDate.toLocaleTimeString("en-US");

// Display copyright, today's date, and time in the footer
footer.innerHTML = `&copy; Your Name, ${currentDate.getFullYear()}<br>Today is: ${fullDate} at ${currentTime}`;

// Log today's full date and time to the console
console.log("Today's Date:", fullDate);
console.log("Current Time:", currentTime);

// Part 3: Greeting Based on Time of Day
const greeting = document.getElementById("greeting");
const hour = currentDate.getHours();

if (hour < 12) {
    greeting.textContent = "Good morning!";
    greeting.classList.add("morning");
} else if (hour < 17) {
    greeting.textContent = "Good afternoon!";
    greeting.classList.add("afternoon");
} else {
    greeting.textContent = "Good evening!";
    greeting.classList.add("evening");
}

// Part 3: Alert Button
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => alert("Hello world!"));

// Part 3: Hover Button
alertButton.onmouseover = () => {
    alertButton.textContent = "Hovered!";
};
alertButton.onmouseout = () => {
    alertButton.textContent = "Click me!";
};

// Part 3: For Loop to Populate List
const numbersList = document.getElementById("numbers");

for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    numbersList.appendChild(listItem);
}


