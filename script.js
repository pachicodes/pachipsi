// JavaScript for Pachi Parra Website Interactivity & Mobile Navigation

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('motion-ready');

    const motionTargets = document.querySelectorAll(
        '.hero-content > *, .hero-media, section > .container > .section-header, '
        + '.concept-image-container, .concept-content, .quote-banner, .services-preview-link, '
        + '.editorial-card, .audience-card, .edu-card, .step-card, .service-card, '
        + '.choice-item, .faq-item, .final-card, .contact-content, .contact-form'
    );

    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const motionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

        motionTargets.forEach(target => motionObserver.observe(target));
    } else {
        motionTargets.forEach(target => target.classList.add('is-visible'));
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mainNav) {
        mainNav.setAttribute('aria-hidden', window.innerWidth <= 768 ? 'true' : 'false');
    }

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.add('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mainNav.setAttribute('aria-hidden', 'false');
        });
    }

    if (mobileCloseBtn && mainNav) {
        mobileCloseBtn.addEventListener('click', () => {
            mainNav.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mainNav.setAttribute('aria-hidden', 'true');
        });
    }

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mainNav.setAttribute('aria-hidden', 'true');
            }
        });
    });

    // Active Section Link Highlighting on Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-list a[href*=' + sectionId + ']').forEach(a => {
                    a.classList.add('active');
                });
            } else {
                document.querySelectorAll('.nav-list a[href*=' + sectionId + ']').forEach(a => {
                    a.classList.remove('active');
                });
            }
        });
    });
});

// Contact Form Handler Simulation
function showContactConfirmation() {
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccessMessage');

    if (contactForm && successMsg) {
        contactForm.style.display = 'none';
        successMsg.style.display = 'block';
        successMsg.setAttribute('tabindex', '-1');
        successMsg.focus();
    }
}
