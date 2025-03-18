
// Initialize Lucide icons
lucide.createIcons();

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Hero carousel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('hero-carousel');
    const slides = carousel.querySelectorAll('.carousel-item');
    const dotsContainer = document.getElementById('carousel-dots');
    let currentSlide = 0;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot', 'h-2', 'w-4', 'rounded-full', 'bg-white/50');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);

        // Add click event to navigate to the corresponding slide
        dot.addEventListener('click', () => {
            goToSlide(index);
        });

        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    // Initialize the first slide and dot
    slides[0].classList.add('active');
    dots[0].classList.add('active');

    // Function to go to a specific slide
    function goToSlide(index) {
        if (index === currentSlide) return;

        // Remove active classes from the current slide and dot
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        // Add the 'prev' class to the current slide for smooth transition
        slides[currentSlide].classList.add('prev');

        // Update current slide
        currentSlide = index;

        // Add active classes to the new slide and dot
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');

        // Reset the 'prev' class after the transition
        setTimeout(() => {
            slides.forEach((slide) => {
                slide.classList.remove('prev');
            });
        }, 1000); // Match the transition duration in CSS
    }

    // Function to move to the next slide
    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextIndex);
    }

    // Set interval to change slides every 5 seconds
    let interval = setInterval(nextSlide, 5000);

    // Reset interval when manually changing slides
    dotsContainer.addEventListener('click', () => {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
    });
});
// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    mobileMenuButton.addEventListener("click", function () {
        // Toggle the mobile menu visibility with smooth transition
        if (mobileMenu.classList.contains("max-h-0")) {
            mobileMenu.classList.remove("max-h-0");
            mobileMenu.classList.add("max-h-96"); // Adjust this value based on your content height
        } else {
            mobileMenu.classList.remove("max-h-96");
            mobileMenu.classList.add("max-h-0");
        }
    });
});


tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0F4C81',
            }
        }
    }
}
