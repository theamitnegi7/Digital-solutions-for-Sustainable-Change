document.addEventListener('DOMContentLoaded', function() {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function checkVisibility() {
        fadeInSections.forEach(section => {
            section.classList.toggle('visible', isElementInViewport(section));
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});
