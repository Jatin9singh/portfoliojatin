function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const closeIcon = document.querySelector('.close-icon');
    const menuIcon = document.querySelector('.menu-icon');

    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        navLinks.style.display = 'flex';
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
$(document).ready(function() {
    // Smooth scroll for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Fade-in animation for the about section
    $(window).on('load', function() {
        $('.about-section').css('opacity', '1');
    });
});

