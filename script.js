  const searchIcon = document.getElementById('search-icon');
  const searchInput = document.getElementById('search-input');
  const navIcon = document.querySelector('.nav-icon');

  searchIcon.addEventListener('click', () => {
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'block';
      searchInput.focus();
    } else {
      searchInput.style.display = 'none';
    }
  });

  // Close search input when clicking outside
  document.addEventListener('click', (e) => {
    if (!navIcon.contains(e.target)) {
      searchInput.style.display = 'none';
    }
  });



document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.querySelector('.nav-links');
  const icon = menuIcon.querySelector('i'); // Get the icon inside the menu icon container

  // Toggle navigation menu visibility and icon
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Toggle the icon class
    if (navLinks.classList.contains('show')) {
      icon.classList.remove('bx-menu');
      icon.classList.add('bx-x');
    } else {
      icon.classList.remove('bx-x');
      icon.classList.add('bx-menu');
    }
  });

  // Close the menu if clicked outside
  document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('show');

      // Reset icon to bx-menu when menu is closed
      if (icon.classList.contains('bx-x')) {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
      }
    }
  });
});

const images = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg',
  'images/image4.jpg',
  'images/image5.jpg',
  'images/image6.jpg',
  'images/image7.jpg',
  'images/image8.jpg',
  'images/image9.jpg',
  'images/image10.jpg'
];

let currentIndex = 0;
const mainSection = document.querySelector('.main-section');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Function to update the background image
function updateBackground() {
  mainSection.style.backgroundImage = `url(${images[currentIndex]})`;
}

// Show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateBackground();
}

// Show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateBackground();
}

// Event listeners for buttons
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Auto-change image every 5 seconds
setInterval(showNextImage, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll(".pagination .dot");
  const testimonialSets = document.querySelectorAll(".testimonial-set");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Remove active class from all dots and testimonial sets
      dots.forEach(d => d.classList.remove("active"));
      testimonialSets.forEach(set => set.classList.remove("active"));

      // Add active class to clicked dot and corresponding testimonial set
      dot.classList.add("active");
      testimonialSets[index].classList.add("active");
    });
  });
});



    // Get the button
    const backToTopButton = document.getElementById('backToTop');

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    };

    // When the user clicks the button, scroll back to the top of the document
    backToTopButton.onclick = function(e) {
      e.preventDefault(); // Prevent the default anchor behavior
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top with smooth animation
    };
