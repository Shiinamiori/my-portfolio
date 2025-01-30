// EXPLORE SCROLL
$(".explore").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 500);
});

// MENU
$(document).ready(function () {
    const $menuToggle = $("#menu-toggle");
    const $menuLinks = $("#menu-links");
    const $closeMenu = $("#close-menu .close-button");

    // Toggle the menu visibility
    $menuToggle.on("click", function (e) {
        e.stopPropagation();
        $menuLinks.toggleClass("visible");
    });

    // Close the menu when clicking the close button
    $closeMenu.on("click", function () {
        $menuLinks.removeClass("visible");
    });

    // Close the menu when clicking anywhere outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest("#menu-links, #menu-toggle").length) {
        $menuLinks.removeClass("visible");
        }
    });
});

//FADE IN
$(window).on('scroll', function() {
    $('.fade-in').each(function() {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).scrollTop() + $(window).height();

        // Check if the element is in the viewport
        if (windowHeight > elementTop + 200) { // Adjust the 100 if needed
            $(this).addClass('fade-in-visible');
        }
    });
});