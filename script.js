$(document).ready(function(){
    // Smooth scrolling when clicking on navigation links
    $('nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    // Toggle navigation menu for small screens
    $('.fa-solid').on('click', function() {
        $('nav ul').toggleClass('show');
    });

    // Close navigation menu when a link is clicked (for small screens)
    $('nav ul li a').on('click', function() {
        if ($(window).width() <= 600) {
            $('nav ul').removeClass('show');
        }
    });

    // Tab functionality
    $('.tab-links').on('click', function() {
        const tabname = $(this).attr('onclick').split("'")[1];
        $('.tab-links').removeClass('active-link');
        $(this).addClass('active-link');
        $('.tab-contents').removeClass('active-tab');
        $(`#${tabname}`).addClass('active-tab');
    });
});
