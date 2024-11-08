const text = "Choose Your Budget Range";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        100
        setTimeout(type, 300); // Delay between each character
    }
}

type(); // Start typing animation

// Function to add the slide-in effect

function slideInServices() {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the item is in the viewport
        if (itemTop < windowHeight - 100) {
            item.classList.add('slide-in'); // Add the animation class
        }
    });
}

// Listen for scroll events and run the slideInServices function
window.addEventListener('scroll', slideInServices);

// Initial call to animate items already in view on page load
slideInServices();

//test


// Data and other functions remain unchanged


//
window.onload = function() {
    const heading = document.querySelector('.range-section h2');
    heading.classList.add('animate'); // Add the animation class
};

// Data for each range
const rangeData = {
    low: [
        { img: 'low1.jpg', price: '$100,000' },
        { img: 'low2.jpg', price: '$120,000' },
        { img: 'low3.jpg', price: '$150,000' }
    ],
    medium: [
        { img: 'medium1.jpg', price: '$200,000' },
        { img: 'medium2.jpg', price: '$250,000' },
        { img: 'medium3.jpg', price: '$300,000' }
    ],
    high: [
        { img: 'high1.jpg', price: '$500,000' },
        { img: 'high2.jpg', price: '$750,000' },
        { img: 'high3.jpg', price: '$1,000,000' }
    ]
};

// Function to display the selected range images
function showRange(range) {
    const rangeGallery = document.getElementById('range-gallery');
    rangeGallery.innerHTML = ''; // Clear previous images

    rangeData[range].forEach(item => {
        const rangeItem = document.createElement('div');
        rangeItem.classList.add('range-item');
        rangeItem.innerHTML = `
            <img src="${item.img}" alt="${range} range house">
            <span class="price-tag">${item.price}</span>
        `;
        rangeGallery.appendChild(rangeItem);
    });
}

// Display Low Range by default
showRange('low');

// Select all buttons and range items

const buttons = document.querySelectorAll('.range-btn');
const rangeItems = document.querySelectorAll('.range-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetGroup = button.getAttribute('data-target');

        // Hide all range items
        rangeItems.forEach(item => {
            item.classList.remove('active');
        });

        // Show and animate items matching the button's target
        rangeItems.forEach(item => {
            if (item.getAttribute('data-group') === targetGroup) {
                item.classList.add('active');
            }
        });
    });
});