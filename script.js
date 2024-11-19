// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Part 3: Footer with current year
    function createFooter() {
        const footer = document.createElement('footer');
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `© ${currentYear} Meg Boacon. All rights reserved.`;
        document.body.appendChild(footer);
        
        // Print full date to console
        console.log('Today\'s date:', new Date().toDateString());
    }
    createFooter();

    // Part 3: Portfolio Greeting
    function setGreeting() {
        // Create greeting element if it doesn't exist
        const greetingDiv = document.createElement('div');
        greetingDiv.id = 'greeting';
        // Insert greeting before the h1
        const h1 = document.querySelector('h1');
        h1.parentNode.insertBefore(greetingDiv, h1);

        const hour = new Date().getHours();
        let greeting;
        let greetingClass;

        if (hour < 12) {
            greeting = "Good morning!";
            greetingClass = "morning";
        } else if (hour < 17) {
            greeting = "Good afternoon!";
            greetingClass = "afternoon";
        } else {
            greeting = "Good evening!";
            greetingClass = "evening";
        }

        greetingDiv.textContent = greeting;
        greetingDiv.className = greetingClass;
    }
    setGreeting();

    // Part 3: Alert Button
    function createAlertButton() {
        const button = document.createElement('button');
        button.id = 'btn-alert';
        button.textContent = 'Click me!';
        
        // Add button after contact details
        const contactSection = document.querySelector('h2:last-of-type');
        contactSection.after(button);

        button.addEventListener('click', function() {
            alert('Hello world!');
        });

        // Hover functionality
        button.addEventListener('mouseover', function() {
            this.textContent = 'Go ahead, click!';
        });

        button.addEventListener('mouseout', function() {
            this.textContent = 'Click me!';
        });
    }
    createAlertButton();

    // Part 3: Number List
    function createNumberList() {
        const ol = document.createElement('ol');
        ol.id = 'numbers';
        
        // Add list after the alert button
        const button = document.getElementById('btn-alert');
        button.after(ol);

        for (let i = 1; i <= 12; i++) {
            const li = document.createElement('li');
            li.textContent = i % 2 === 0 ? 'even' : 'odd';
            ol.appendChild(li);
        }
    }
    createNumberList();
});
