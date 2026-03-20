/* =============================================
   PORTFOLIO WEBSITE - JAVASCRIPT
   Interactive Features & Functionality
   ============================================ */

// =============================================
// DOCUMENT READY INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeDarkMode();
    initializeScrollEffects();
    initializeContactForm();
    initializeBackToTopButton();
    initializeAnimations();
});

// =============================================
// NAVIGATION FEATURES
// =============================================

/**
 * Initialize navigation features (smooth scrolling, hamburger menu, active links)
 */
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });
}

/**
 * Update active navigation link based on scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// =============================================
// DARK MODE TOGGLE
// =============================================

/**
 * Initialize dark mode toggle functionality
 */
function initializeDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const body = document.body;

    // Check for saved preference or system preference
    const prefersDark = localStorage.getItem('darkMode');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDarkMode = prefersDark ? JSON.parse(prefersDark) : systemDark;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        updateThemeIcon(true);
    }

    // Theme toggle button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        updateThemeIcon(isDark);
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                body.classList.add('dark-mode');
                updateThemeIcon(true);
            } else {
                body.classList.remove('dark-mode');
                updateThemeIcon(false);
            }
        }
    });
}

/**
 * Update theme toggle icon
 */
function updateThemeIcon(isDark) {
    const themeToggle = document.getElementById('theme-toggle');
    if (isDark) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        themeToggle.title = 'Switch to light mode';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        themeToggle.title = 'Switch to dark mode';
    }
}

// =============================================
// SCROLL EFFECTS
// =============================================

/**
 * Initialize scroll animations
 */
function initializeScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Don't stop observing - allow re-animation on scroll back
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
}

// =============================================
// CONTACT FORM HANDLING
// =============================================

/**
 * Initialize contact form submission
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showFormMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.remove('success');
                }, 5000);
            }, 1500);
        });
    }
}

/**
 * Show form feedback message
 */
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;

    if (type === 'error') {
        setTimeout(() => {
            formMessage.classList.remove('error');
        }, 5000);
    }
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =============================================
// BACK TO TOP BUTTON
// =============================================

/**
 * Initialize back-to-top button functionality
 */
function initializeBackToTopButton() {
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =============================================
// ANIMATIONS
// =============================================

/**
 * Initialize additional animations and effects
 */
function initializeAnimations() {
    // Add hover effect to certificate cards
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
        });
    });

    // Add animation delay to cards
    const cards = document.querySelectorAll('.certificate-card, .project-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });

    // Add animation delay to work items
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
    });

    // Parallax effect on hero section
    const heroSection = document.querySelector('.hero');
    const profileImage = document.querySelector('.img-profile');

    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 768) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            if (profileImage) {
                profileImage.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
            }
        }
    });
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

/**
 * Smooth scroll to element
 */
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Add class with animation
 */
function addAnimationClass(element, animationClass) {
    element.classList.add(animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove(animationClass);
    }, { once: true });
}

// =============================================
// KEYBOARD SHORTCUTS
// =============================================

/**
 * Keyboard shortcuts
 */
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for dark mode toggle
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        document.getElementById('theme-toggle').click();
    }

    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// =============================================
// PAGE LOAD COMPLETION
// =============================================

/**
 * Show loading indicator based on page state
 */
window.addEventListener('load', () => {
    // All resources loaded
    document.body.style.opacity = '1';
});

// =============================================
// PERFORMANCE OPTIMIZATION
// =============================================

/**
 * Lazy load images (optional enhancement)
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.dataset.src) {
                entry.target.src = entry.target.dataset.src;
                entry.target.removeAttribute('data-src');
                imageObserver.unobserve(entry.target);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// =============================================
// CONSOLE MESSAGE
// =============================================

console.log('%c👋 Welcome to My Portfolio!', 'color: #0066ff; font-size: 20px; font-weight: bold;');
console.log('%cThank you for visiting my website!', 'color: #ff3333; font-size: 14px;');
console.log('%cShortcut: Press Ctrl+K (or Cmd+K on Mac) to toggle dark mode', 'color: #666; font-size: 12px;');
