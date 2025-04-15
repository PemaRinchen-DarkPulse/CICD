// Add some basic interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add a greeting based on time of day
    const currentHour = new Date().getHours();
    let greeting = '';
    
    if (currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }
    
    // Create a greeting element
    const greetingEl = document.createElement('p');
    greetingEl.textContent = greeting;
    greetingEl.style.textAlign = 'center';
    greetingEl.style.fontSize = '1.2em';
    greetingEl.style.fontWeight = 'bold';
    greetingEl.style.margin = '10px 0';
    
    // Insert after the header
    const header = document.querySelector('header');
    header.parentNode.insertBefore(greetingEl, header.nextSibling);
});