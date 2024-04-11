// Initialize ScrollReveal
ScrollReveal().reveal('#about', {
    delay: 300,
    distance: '50px',
    easing: 'ease-in',
    origin: 'bottom',
    opacity: 0,
    duration: 1000
});

// Get the button element
const clickMeBtn = document.getElementById('clickMeBtn');

// Add click event listener to the button
clickMeBtn.addEventListener('click', function() {
    alert('Button clicked!');
});

// Get the link elements
const myLinks = document.querySelectorAll('.myLink');

// Add click event listener to each link
myLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default action of link
        console.log('Link clicked!');
    });
});
