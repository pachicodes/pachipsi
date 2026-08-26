// JavaScript for Pachi Parra Website Interactivity & Mobile Navigation

document.addEventListener('DOMContentLoaded', () => {
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
    }
}
