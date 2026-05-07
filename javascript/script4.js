document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const greetingDisplay = document.getElementById('greeting-display');

    userForm.addEventListener('submit', (event) => {
        // Prevent the page from refreshing
        event.preventDefault();

        const name = document.getElementById('userName').value;
        
        // Create a personalized message
        greetingDisplay.innerHTML = `<h3>Welcome to the club, ${name}!</h3><p>We're glad you're here.</p>`;
        
        // Optionally hide the form after submission
        userForm.style.display = 'none';
    });
});
