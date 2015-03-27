$(document).ready(function() {

	// Common Variables
	menuSelector = $(".menu-selector");
	overlay = $(".overlay");

	// Overlay darken
	menuSelector.click(function() {
		if (overlay.css('opacity') == 0) {
			overlay.fadeTo(300, 0.5);
		} else {
			overlay.fadeTo(300, 0);
		}
	});

	$('.intro-line').animate({
        "top":"47%",
        "opacity":"1"
    },600);

    $('.menu-selector').animate({
        "opacity":"1"
    },600);

	// Menu icon animation
	menuSelector.click(function() {
		$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");

		// Get current url
		// Select an a element that has the matching href and apply a class of 'active'. Also prepend a - to the content of the link
		var url = window.location.href;
		console.log(url);
		$('.menu-item a[href="'+url+'"]').toggleClass('menu-active');
	});

	$(".project-nav-download-bubble").hide().delay("1000").fadeToggle("1000", function() {
        $(this).delay("3000").fadeToggle("1000");
    });

    $(window).scroll(function() {
        var $nav = $(".project-nav");
        var $textLogo = $(".text-logo");
        var $footer = $("#contact");

        var posFooter = $footer.offset().top;  //find top of footer
        var posNav = $nav.offset().top + 350;  //find top of nav, and compensate for body of nav (260)

        if (posNav > posFooter){
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 0}, 100);
        } else {
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 1}, 100);
        }
    });

	// Init
	$('.menu-link').bigSlide();
});
