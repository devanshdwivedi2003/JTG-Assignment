// Mobile Menu Toggle
const menuIcon = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}

// Close menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Video Play Button
const playButton = document.querySelector('.play-button');
const videoContainer = document.querySelector('.video-container');

if (playButton && videoContainer) {
    playButton.addEventListener('click', () => {
        const videoThumbnail = videoContainer.querySelector('.video-thumbnail');
        const iframe = document.createElement('iframe');
        
        iframe.setAttribute('src', 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        
        videoContainer.style.paddingBottom = '56.25%'; // 16:9 aspect ratio
        videoContainer.style.position = 'relative';
        
        // Remove thumbnail and play button
        videoThumbnail.remove();
        playButton.remove();
        
        // Add iframe
        videoContainer.appendChild(iframe);
    });
}

// Testimonial Slider
const dots = document.querySelectorAll('.dot');
if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active class from all dots
            dots.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked dot
            dot.classList.add('active');
            
            // Here you would normally change the testimonial content
            // For this demo, we're just changing the active dot
        });
    });
}

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formElements = contactForm.elements;
        const formData = {};
        
        for (let i = 0; i < formElements.length; i++) {
            const element = formElements[i];
            if (element.tagName !== 'BUTTON') {
                formData[element.placeholder] = element.value;
            }
        }
        
        // Here you would normally send the data to a server
        console.log('Form Data:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}


// Sticky Navigation
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Animation on scroll (simple implementation)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .price-card, .section-header, .org-image, .proto-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.feature-card, .price-card, .section-header, .org-image, .proto-image');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger animation for elements in view on load
    animateOnScroll();
});

// Listen for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);