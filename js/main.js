// ==========================================
// Portfolio Website - Main JavaScript
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. PRELOADER
    // ==========================================
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });

    // ==========================================
    // 2. NAVIGATION
    // ==========================================
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.getElementById('hamburger');
    
    // Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function activateNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', activateNavLink);

    // ==========================================
    // 3. THEME TOGGLE (Dark/Light Mode)
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // ==========================================
    // 4. TYPING ANIMATION
    // ==========================================
    const typingText = document.querySelector('.typing-text');
    const texts = [
        'Data Engineer',
        'Machine Learning Developer',
        'Full Stack Developer',
        'Aspiring Data Scientist',
        'Problem Solver'
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();

    // ==========================================
    // 5. PROJECTS FILTER
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ==========================================
    // 6. SKILL PROGRESS ANIMATION
    // ==========================================
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkills() {
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }
    
    // Animate skills when they come into view
    const skillsSection = document.querySelector('.skills');
    const observerOptions = {
        threshold: 0.3
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // ==========================================
    // 7. CONTACT FORM VALIDATION & SUBMISSION
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    const formInputs = contactForm.querySelectorAll('input, textarea');
    const formMessage = contactForm.querySelector('.form-message');
    
    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
    
    function validateField(field) {
        const fieldGroup = field.parentElement;
        const errorElement = fieldGroup.querySelector('.form-error');
        let isValid = true;
        let errorMessage = '';
        
        // Remove previous error
        field.classList.remove('error');
        errorElement.textContent = '';
        
        // Check if field is empty
        if (field.value.trim() === '') {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && field.value.trim() !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Display error if invalid
        if (!isValid) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
        }
        
        return isValid;
    }
    
    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate all fields
        let isFormValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });
        
        if (!isFormValid) {
            showFormMessage('Please fix the errors above', 'error');
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            submitBtn.classList.remove('loading');
            showFormMessage('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            
            // Log form data (in production, send to backend)
            console.log('Form submitted:', formData);
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }, 2000);
    });
    
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }

    // ==========================================
    // 8. SCROLL TO TOP BUTTON
    // ==========================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 9. SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty hashes
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 10. ANIMATE ON SCROLL (AOS)
    // ==========================================
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out'
    });

    // ==========================================
    // 11. COUNTER ANIMATION FOR STATS
    // ==========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = element.textContent; // Keep original format with +
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    }
    
    const aboutSection = document.querySelector('.about');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => animateCounter(stat));
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }

    // ==========================================
    // 12. LAZY LOADING IMAGES
    // ==========================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ==========================================
    // 13. CURSOR EFFECT (Optional - Desktop only)
    // ==========================================
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);
        
        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            .custom-cursor {
                width: 20px;
                height: 20px;
                border: 2px solid var(--primary-color);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.2s ease;
            }
            
            .custom-cursor.active {
                transform: scale(1.5);
                background: var(--primary-color);
                opacity: 0.5;
            }
        `;
        document.head.appendChild(cursorStyle);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        document.addEventListener('mousedown', () => {
            cursor.classList.add('active');
        });
        
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('active');
        });
    }

    // ==========================================
    // 14. PARALLAX EFFECT FOR HERO SHAPES
    // ==========================================
    const heroShapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        heroShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.2;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ==========================================
    // 15. COPY EMAIL ON CLICK
    // ==========================================
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const email = link.textContent;
            
            navigator.clipboard.writeText(email).then(() => {
                // Show tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Email copied!';
                tooltip.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--primary-color);
                    color: white;
                    padding: 1rem 2rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    z-index: 10000;
                    animation: fadeInOut 2s ease;
                `;
                
                document.body.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        });
    });
    
    // Add fadeInOut animation
    const fadeAnimation = document.createElement('style');
    fadeAnimation.textContent = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            15% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        }
    `;
    document.head.appendChild(fadeAnimation);

    // ==========================================
    // 16. PRINT RESUME TRACKING
    // ==========================================
    const resumeLinks = document.querySelectorAll('a[href*="resume"]');
    
    resumeLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Resume downloaded at:', new Date().toLocaleString());
            // You can send this to analytics
        });
    });

    // ==========================================
    // 17. KEYBOARD NAVIGATION
    // ==========================================
    document.addEventListener('keydown', (e) => {
        // Press ESC to close mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Press T to toggle theme
        if (e.key === 't' || e.key === 'T') {
            if (!e.target.matches('input, textarea')) {
                themeToggle.click();
            }
        }
    });

    // ==========================================
    // 18. PERFORMANCE OPTIMIZATION
    // ==========================================
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(() => {
            // Scroll-dependent functions here
        });
    });

    // ==========================================
    // 19. CONSOLE MESSAGE
    // ==========================================
    console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
    console.log('%cInterested in the code? Check out the repository on GitHub!', 'font-size: 14px; color: #6b7280;');
    console.log('%chttps://github.com/aloksingh1818/My-Portfolio', 'font-size: 14px; color: #0ea5e9;');

    // ==========================================
    // 20. ERROR HANDLING
    // ==========================================
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.error);
        // You can send errors to a logging service
    });

}); // End DOMContentLoaded

// ==========================================
// SERVICE WORKER REGISTRATION (Optional - for PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}
