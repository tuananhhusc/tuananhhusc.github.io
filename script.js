// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Add animation to hamburger
        hamburger.style.transform = hamburger.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.style.transform = 'rotate(0deg)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add background opacity based on scroll
        if (scrollTop > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }

        lastScrollTop = scrollTop;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.about-text p, .profile-img, .social-icons a').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hero background is now handled via CSS

    // Typing effect for hero title (optional)
    function typeWriter(element, text, delay = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, delay);
            }
        }
        
        type();
    }

    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            const rate = scrolled * 0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });

    // Form validation (if needed for future contact forms)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Hero background loads automatically via CSS
    });

    // Add social media link functionality
    const socialLinks = {
        website: '#',
        facebook: 'https://www.facebook.com/ntablp/',
        instagram: 'https://www.instagram.com/nta_blp/',
        email: 'mailto:tuananhqhvl777@gmail.com',
        youtube: 'https://youtube.com/@ntablp',
        podcast: 'https://open.spotify.com/user/ouo3i6ewk9dh3g4ep77huvol7?si=c763cfb915014924'
    };

    // Update social links
    document.querySelectorAll('.social-icons a').forEach((link, index) => {
        const platforms = Object.keys(socialLinks);
        if (platforms[index]) {
            link.href = socialLinks[platforms[index]];
            
            // Add target="_blank" to open in new tab (except for email)
            if (platforms[index] !== 'email') {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            
            // Add analytics tracking (optional)
            link.addEventListener('click', function() {
                // Analytics code would go here
                console.log(`Social media click: ${platforms[index]}`);
            });
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC to close mobile menu
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.style.transform = 'rotate(0deg)';
        }
    });

    // Add touch support for mobile devices
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - could scroll to next section
                console.log('Swipe up detected');
            } else {
                // Swipe down - could scroll to previous section
                console.log('Swipe down detected');
            }
        }
    }
});

// Add CSS for mobile menu animation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            z-index: 999;
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-menu li {
            margin: 1rem 0;
        }

        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }

    .loaded {
        opacity: 1;
    }

    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
`;

document.head.appendChild(style); 