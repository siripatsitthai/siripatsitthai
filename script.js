// ============================================
// Smooth Scrolling & Navigation
// ============================================

// Highlight active navigation link based on scroll position
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

// ============================================
// Intersection Observer for Fade-in Effects
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in effect to cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.education-card, .skill-item, .project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// ============================================
// Form Validation (for contact section)
// ============================================

const contactForm = document.querySelector('.contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple validation
        if (!email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============================================
// Scroll-to-Top Button
// ============================================

const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scroll-top-btn';
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--accent-color), #a29bfe);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
    z-index: 99;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
`;

document.body.appendChild(scrollTopBtn);

// Show scroll-to-top button when scrolled down
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.style.display = 'flex';
        scrollTopBtn.style.alignItems = 'center';
        scrollTopBtn.style.justifyContent = 'center';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top on button click
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Hover effect on scroll-to-top button
scrollTopBtn.addEventListener('mouseenter', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// ============================================
// Dynamic Year in Footer
// ============================================

const footer = document.querySelector('.footer p');
if (footer) {
    footer.textContent = `© ${new Date().getFullYear()} My Portfolio. All rights reserved.`;
}

// ============================================
// Animation on Scroll
// ============================================

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section h2');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementHeight = element.offsetHeight;
        const screenPosition = window.innerHeight;

        if (elementPosition < screenPosition) {
            element.style.animation = 'slideInDown 0.8s ease forwards';
        }
    });
};

// Add animation keyframes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(animationStyle);

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run on page load

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================

const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--accent-color);
        `;
        
        // Only add if it doesn't already exist
        if (!navbar.querySelector('.menu-toggle')) {
            navbar.querySelector('.container').appendChild(menuToggle);
        }
    }
};

document.addEventListener('DOMContentLoaded', createMobileMenu);
window.addEventListener('resize', createMobileMenu);

console.log('Portfolio website loaded successfully!');
