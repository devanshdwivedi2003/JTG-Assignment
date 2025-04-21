// Mobile Menu Toggle
const menuIcon = document.getElementById("menuIcon");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.getElementById("navLinks");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
  });
}

if (closeMenu) {
  closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
}

// Close menu when clicking on a link
const navItems = document.querySelectorAll(".nav-links ul li a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Video Play Button
const playButton = document.querySelector(".play-button");
const videoContainer = document.querySelector(".video");
let flag = 0;
if (playButton && videoContainer) {
  playButton.addEventListener("click", () => {
    if (flag == 0) {
      videoContainer.play();
      playButton.style.opacity = 0;
      flag = 1;
    } else {
      videoContainer.pause();
      playButton.style.opacity = 1;
      flag = 0;
    }
  });
}

//slider
const slider = [...document.querySelectorAll(".slider-item")];
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  slider.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });   

  // Update active dot
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  currentIndex = index;
}

if (dots.length > 0) {
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });
}

// Optional: Auto-slide with dot update
setInterval(() => {
  let nextIndex = (currentIndex + 1) % dots.length;
  showSlide(nextIndex);
}, 5000);

// Form Submission
const contactForm = document.getElementById("contactForm");
const modal = document.querySelector('.modal');
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const formElements = contactForm.elements;
    const formData = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.tagName !== "BUTTON") {
        formData[element.placeholder] = element.value;
      }
    }

    // Here you would normally send the data to a server
    console.log("Form Data:", formData);

    // Show success message
    modal.style.display = 'flex'; 
    // Reset form
    contactForm.reset();
  });
}


const cancelbtn=document.querySelector(".cancel-btn");
cancelbtn.addEventListener("click",()=>{
  modal.style.display="none";
});

// Sticky Navigation
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.padding = "10px 0";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
  }
});

// Animation on scroll (simple implementation)
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".feature-card, .price-card, .section-header, .org-image, .proto-image"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".feature-card, .price-card, .section-header, .org-image, .proto-image"
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  // Trigger animation for elements in view on load
  animateOnScroll();
});

// Listen for scroll to trigger animations
window.addEventListener("scroll", animateOnScroll);
