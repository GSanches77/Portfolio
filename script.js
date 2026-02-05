document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    // Toggle menu
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuIcon.classList.toggle('active'); // Optional: for animating the hamburger to X
    });

    // Close menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuIcon.classList.remove('active');
        });
    });
});
