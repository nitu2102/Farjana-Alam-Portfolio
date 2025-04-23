// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animations on scroll (optional)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.classList.add('fade-in'); // Add fade-in class for animation
        }
    });
});

// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const mobileNav = document.getElementById('mobileNav');
    // Toggle display between 'flex' and 'none' for mobile nav
    mobileNav.style.display = (mobileNav.style.display === 'flex') ? 'none' : 'flex';
    // Optionally change the hamburger icon (open/close)
    const hamburgerIcon = document.getElementById('hamburger');
    hamburgerIcon.classList.toggle('open');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.style.display = 'none';
        document.getElementById('hamburger').classList.remove('open');
    });
});
