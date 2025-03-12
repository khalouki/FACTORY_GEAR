
// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Hero carousel
const heroCarousel = document.getElementById('hero-carousel');
const backgroundImages = [
    "images/image1.jpeg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

// Create initial background images
backgroundImages.forEach((img, index) => {
    const imgDiv = document.createElement('div');
    imgDiv.className = `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-20' : 'opacity-0'}`;
    imgDiv.innerHTML = `<img src="${img}" alt="Industrial automation background ${index + 1}" class="w-full h-full object-cover">`;
    heroCarousel.appendChild(imgDiv);
});

// Carousel functionality
let currentBgIndex = 0;
setInterval(() => {
    const imgDivs = heroCarousel.querySelectorAll('div');
    imgDivs[currentBgIndex].classList.remove('opacity-20');
    imgDivs[currentBgIndex].classList.add('opacity-0');

    currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;

    imgDivs[currentBgIndex].classList.remove('opacity-0');
    imgDivs[currentBgIndex].classList.add('opacity-20');
}, 7000);
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0F4C81',
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'animate-on-scroll' class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Get the animation class from the data-animation attribute
                    const animationClass = entry.target.getAttribute("data-animation");
                    // Add the animation class to the element
                    entry.target.classList.add("animate__animated",animationClass);
                    observer.unobserve(entry.target); // Stop observing after animation is triggered
                }
            });
        },
        {
            threshold: 0.5, // Trigger when 50% of the element is visible
        }
    );

    // Observe each element
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
});
