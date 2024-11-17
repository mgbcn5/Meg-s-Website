// main.js

// Greeting functionality
function setGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greetingText;
    let greetingClass;

    if (hour < 12) {
        greetingText = "Good morning!";
        greetingClass = "morning-theme";
    } else if (hour < 17) {
        greetingText = "Good afternoon!";
        greetingClass = "afternoon-theme";
    } else {
        greetingText = "Good evening!";
        greetingClass = "evening-theme";
    }

    greetingElement.textContent = greetingText;
    greetingElement.className = greetingClass;
}

// Footer with dynamic year
function setFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('footer').innerHTML = 
        `© ${currentYear} Your Portfolio. All rights reserved.`;
    
    // Print full date to console
    console.log('Today\'s date:', new Date().toLocaleDateString());
}

// Alert button functionality
function setupAlertButton() {
    const alertBtn = document.getElementById('btn-alert');
    
    alertBtn.addEventListener('click', () => {
        alert('Hello world!');
    });

    alertBtn.addEventListener('mouseover', () => {
        alertBtn.textContent = 'Click me!';
    });

    alertBtn.addEventListener('mouseout', () => {
        alertBtn.textContent = 'Alert Button';
    });
}

// Generate numbered list
function generateNumberedList() {
    const numbersList = document.getElementById('numbers');
    
    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${i} is ${i % 2 === 0 ? 'even' : 'odd'}`;
        numbersList.appendChild(listItem);
    }
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setGreeting();
    setFooter();
    setupAlertButton();
    generateNumberedList();
});

