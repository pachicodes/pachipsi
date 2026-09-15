// JavaScript for Pachi Parra Website Interactivity & Mobile Navigation

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('motion-ready');

    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('pachi-theme');
    const setTheme = theme => {
        const isLight = theme === 'light';
        document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
        themeToggle?.setAttribute('aria-label', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
        themeToggle?.setAttribute('title', isLight ? 'Ativar tema escuro' : 'Ativar tema claro');
        themeToggle?.querySelector('use')?.setAttribute('href', isLight ? '#icon-sun' : '#icon-moon');
    };

    setTheme(savedTheme === 'light' ? 'light' : 'dark');
    themeToggle?.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('pachi-theme', nextTheme);
        setTheme(nextTheme);
    });

    const motionTargets = document.querySelectorAll(
        '.hero-content > *, .hero-media, section > .container > .section-header, '
        + '.concept-image-container, .concept-content, .quote-banner, .services-preview-link, '
        + '.editorial-card, .audience-card, .edu-card, .step-card, .service-card, '
        + '.choice-item, .faq-item, .final-card, .contact-content, .contact-form, '
        + '.triad-card, .credential-item, .certificate-card, .transparency-banner, '
        + '.question-card, .integrative-card, .theme-card'
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
    const menuBackdrop = document.getElementById('menuBackdrop');
    const mainNav = document.getElementById('mainNav');
    const brandLogo = document.querySelector('.brand-logo');
    const navLinks = document.querySelectorAll('.nav-link');
    let lastFocusedElement = null;
    let menuHadFocus = false;

    const getMenuFocusableElements = () => mainNav ? [...mainNav.querySelectorAll('a[href], button:not([disabled])')] : [];

    const closeMobileMenu = ({ restoreFocus = true } = {}) => {
        if (!mainNav) return;
        mainNav.classList.remove('open');
        mainNav.setAttribute('aria-hidden', 'true');
        menuBackdrop?.classList.remove('is-visible');
        mobileMenuBtn?.setAttribute('aria-expanded', 'false');
        if (restoreFocus) (lastFocusedElement || mobileMenuBtn)?.focus();
        lastFocusedElement = null;
        menuHadFocus = false;
    };

    mainNav?.addEventListener('focusin', () => {
        menuHadFocus = true;
    });

    if (mainNav) {
        mainNav.setAttribute('aria-hidden', window.innerWidth <= 768 ? 'true' : 'false');
    }

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            lastFocusedElement = document.activeElement;
            mainNav.classList.add('open');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
            mainNav.setAttribute('aria-hidden', 'false');
            menuBackdrop?.classList.add('is-visible');
            mobileCloseBtn?.focus();
        });
    }

    if (mobileCloseBtn && mainNav) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    menuBackdrop?.addEventListener('click', closeMobileMenu);

    document.addEventListener('click', event => {
        if (!mainNav?.classList.contains('open')) return;
        const target = event.target;
        if (!(target instanceof Node) || mainNav.contains(target) || mobileMenuBtn?.contains(target)) return;
        closeMobileMenu();
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && mainNav && mainNav.classList.contains('open')) {
            closeMobileMenu();
            return;
        }

        if (event.key === 'Tab' && mainNav?.classList.contains('open')) {
            const focusableElements = getMenuFocusableElements();
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            if (!firstElement || !lastElement) return;
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });

    window.addEventListener('resize', () => {
        if (!mainNav) return;
        if (window.innerWidth > 768) {
            if (mainNav.classList.contains('open') && mainNav.contains(document.activeElement)) {
                brandLogo?.focus();
            }
            mainNav.classList.remove('open');
            mainNav.setAttribute('aria-hidden', 'false');
            menuBackdrop?.classList.remove('is-visible');
            mobileMenuBtn?.setAttribute('aria-expanded', 'false');
            lastFocusedElement = null;
            return;
        }
        if (mainNav.classList.contains('open')) {
            mainNav.setAttribute('aria-hidden', 'false');
        } else {
            if (menuHadFocus || mainNav.contains(document.activeElement)) mobileMenuBtn?.focus();
            menuHadFocus = false;
            mainNav.setAttribute('aria-hidden', 'true');
        }
    });

    // Close menu when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                closeMobileMenu();
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

    // Certificate lightbox
    const certificateLightbox = document.getElementById('certificateLightbox');
    const certificateLightboxImage = document.getElementById('certificateLightboxImage');
    const certificateLightboxCaption = document.getElementById('certificateLightboxCaption');
    const certificateLightboxClose = document.getElementById('certificateLightboxClose');
    const certificateTriggers = document.querySelectorAll('.certificate-preview-link[data-lightbox-src]');
    let certificateLightboxTrigger = null;

    const getCertificateLightboxFocusable = () => certificateLightbox
        ? [...certificateLightbox.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
        : [];

    const closeCertificateLightbox = ({ restoreFocus = true } = {}) => {
        if (!certificateLightbox) return;
        certificateLightbox.hidden = true;
        certificateLightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('lightbox-open');
        if (certificateLightboxImage) {
            certificateLightboxImage.removeAttribute('src');
            certificateLightboxImage.alt = '';
        }
        if (certificateLightboxCaption) certificateLightboxCaption.textContent = '';
        if (restoreFocus) certificateLightboxTrigger?.focus();
        certificateLightboxTrigger = null;
    };

    const openCertificateLightbox = (trigger) => {
        if (!certificateLightbox || !certificateLightboxImage || !certificateLightboxCaption) return;
        const src = trigger.getAttribute('data-lightbox-src');
        const alt = trigger.getAttribute('data-lightbox-alt') || '';
        if (!src) return;

        certificateLightboxTrigger = trigger;
        certificateLightboxImage.src = src;
        certificateLightboxImage.alt = alt;
        certificateLightboxCaption.textContent = alt;
        certificateLightbox.hidden = false;
        certificateLightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('lightbox-open');
        certificateLightboxClose?.focus();
    };

    certificateTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => openCertificateLightbox(trigger));
    });

    certificateLightboxClose?.addEventListener('click', () => closeCertificateLightbox());
    certificateLightbox?.querySelectorAll('[data-lightbox-close]').forEach(element => {
        element.addEventListener('click', () => closeCertificateLightbox());
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape' || !certificateLightbox || certificateLightbox.hidden) return;
        closeCertificateLightbox();
    });

    document.addEventListener('keydown', event => {
        if (event.key !== 'Tab' || !certificateLightbox || certificateLightbox.hidden) return;
        const focusableElements = getCertificateLightboxFocusable();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (!firstElement || !lastElement) return;
        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    });
});
