$(document).ready(function() {




	// Common Variables
	menuSelector = $(".header-menu");
	postMenuSelector = $(".header-menu");
	overlay = $(".overlay");

	// Overlay darken
	menuSelector.click(function() {

		menuSelector.toggleClass("open");

		if (overlay.css('opacity') == 0) {
			overlay.fadeTo(300, 0.5);
		} else {
			overlay.fadeTo(300, 0);
		}
	});

	postMenuSelector.click(function() {
		if (overlay.css('opacity') == 0) {
			overlay.fadeTo(300, 0.5);
		} else {
			overlay.fadeTo(300, 0);
		}
	});

	// Fade-in for homepage on load
	// $('.intro-line').animate({
    //     "top":"47%",
    //     "opacity":"1"
    // },600);

    $('.header-menu').animate({
        "opacity":"1"
    },600);

	// Menu icon animation
	menuSelector.click(function() {


		$(".top-bar").toggleClass("top-bar-close");
		$(".middle-bar").toggleClass("middle-bar-close");
		$(".bottom-bar").toggleClass("bottom-bar-close");

		var url = window.location.href; // Get current url
		$('.menu-item a[href="'+url+'"]').toggleClass('menu-active');
		$('.menu-item a[href="'+url+'"]').parent().toggleClass('hover');
		// Select an a element that has the matching href and apply a class of 'active'. Also prepend a - to the content of the link

		$('.menu-items').toggleClass('slide-in')
	});

	// Download project documentation button
	$(".project-nav-download-bubble").hide().delay("1000").fadeToggle("1000", function() {
        $(this).delay("3000").fadeToggle("1000");
    });

	// Hide project nav on scroll to footer
    // $(window).scroll(function() {
    //     var $nav = $(".project-nav");
    //     var $textLogo = $(".text-logo");
    //     var $footer = $("#contact");
	//
    //     var posFooter = $footer.offset().top;  //find top of footer
    //     var posNav = $nav.offset().top + 350;  //find top of nav, and compensate for body of nav (260)
	//
    //     if (posNav > posFooter){
    //         $(".project-nav, .text-logo").stop(true, true).animate({opacity: 0}, 100);
    //     } else {
    //         $(".project-nav, .text-logo").stop(true, true).animate({opacity: 1}, 100);
    //     }
    // });

	// $('.menu-hover').hover(function() {
	//
	// });

	// Init
	$('.header-menu').bigSlide();

	$.simpleWeather({
	location: 'San Francisco, CA',
	woeid: '',
	unit: 'f',
	success: function(weather) {
	html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

	$("#weather").html(html);
	},
	error: function(error) {
	$("#weather").html('<p>'+error+'</p>');
	}
});

	// Check all elements with a .target class against all images on a page
	BackgroundCheck.init({
	targets: '.bar'
	});

	// Specific images
	BackgroundCheck.init({
	targets: '.bar',
	images: '.check-me'
	});

	// All targets
	BackgroundCheck.refresh();

	// Specific target
	BackgroundCheck.refresh(target);

	// Get current targets
	// BackgroundCheck.get('targets');
	//
	// // Change targets
	// BackgroundCheck.set('targets', '.header');

});
