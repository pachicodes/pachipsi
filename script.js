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

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
            mainNav.classList.remove('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mainNav.setAttribute('aria-hidden', 'true');
            mobileMenuBtn.focus();
        }
    });

    window.addEventListener('resize', () => {
        if (mainNav && window.innerWidth > 768) {
            mainNav.classList.remove('open');
            mainNav.setAttribute('aria-hidden', 'false');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

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

    // Active Section Link Highlighting
    const sections = document.querySelectorAll('section[id]');
    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const sectionId = entry.target.getAttribute('id');
                const sectionLinks = document.querySelectorAll('.nav-list a[href*=' + sectionId + ']');

                sectionLinks.forEach(link => {
                    link.classList.toggle('active', entry.isIntersecting);
                });
            });
        }, { rootMargin: '-35% 0px -55% 0px' });

        sections.forEach(section => sectionObserver.observe(section));
    }
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
