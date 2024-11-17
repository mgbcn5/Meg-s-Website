// Part 1: Sanity Check
console.log("JavaScript is connected!");

// Part 2: Footer with Dynamic Date and Today's Date
const currentDate = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const fullDate = currentDate.toLocaleDateString("en-US", options);
const footer = document.getElementById("footer");
footer.innerHTML = `&copy; Your Name, ${currentDate.getFullYear()}<br>Today is: ${fullDate}`;
console.log("Today's Date:", fullDate);

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

// Part 4: Alert Button
const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => alert("Hello world!"));

// Part 5: Hover Button
alertButton.onmouseover = () => {
    alertButton.textContent = "Hovered!";
};
alertButton.onmouseout = () => {
    alertButton.textContent = "Click me!";
};

// Part 6: For Loop to Populate List
const numbersList = document.getElementById("numbers");
for (let i = 1; i <= 12; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i % 2 === 0 ? "Even" : "Odd";
    numbersList.appendChild(listItem);
}

