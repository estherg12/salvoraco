document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-image");
    const leftArrow = document.querySelector(".gallery-arrow.left");
    const rightArrow = document.querySelector(".gallery-arrow.right");

    let currentIndex = 0;

    // Function to update the visible image
    function updateGallery(index) {
        images.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) {
                img.classList.add("active");
            }
        });
    }

    // Event listeners for arrows
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery(currentIndex);
    });

    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery(currentIndex);
    });

    // Initial setup
    updateGallery(currentIndex);
});

// JavaScript functionality for Salvora & CO

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Placeholder functionality for properties (you can integrate API or database in the future)
const properties = [
    { title: "Luxury Villa in Alicante", image: "placeholder1.jpg" },
    { title: "Cozy Apartment in the City Center", image: "placeholder2.jpg" },
    { title: "Beachfront Home", image: "placeholder3.jpg" },
];

console.log("Properties loaded:", properties);

