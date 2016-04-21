$(document).ready(function() {
	mywindow = $(window);
	square = $(".header-logo-square");
	circle = $(".header-logo-circle");
	triangle = $(".header-logo-triangle");
	shim = $(".header-logo-shim");
	menuSelector = $(".menu-selector");
	body = $("body");
	footer = $("footer");
	menuBottomBar = $(".menu-bottom-bar");
	menuMiddleBar = $(".menu-middle-bar");
	menuTopBar = $(".menu-top-bar");
	headerNavMobile = $(".header-nav-mobile");

	loadDelay = 100

	square.addClass("header-logo-square-loaded");
	triangle.addClass("header-logo-triangle-loaded");
	circle.addClass("header-logo-circle-loaded");
	shim.addClass("header-logo-shim-loaded");
	footer.addClass('loaded-o');

	// site wide
	$(".intro-arrow").addClass("loaded");

	// intro page
	$(".intro").addClass("loaded");
	$(".twitter-module").addClass("loaded");

	// work post
	$(".work-post-intro-desc").addClass("loaded");

	// about page
	$('.about-photo').addClass("loaded");
	$('.about-bio').addClass("loaded");

	// hide arrow
	mywindow.scroll(function() {
    	if(mywindow.scrollTop() > 0)
    	{
        	$('.intro-arrow').addClass("intro-arrow-hidden");
    	}
    	else
    	{
        	$('.intro-arrow').removeClass("intro-arrow-hidden");
    	}

 	});

	// work item tile load-in
	$(".work-item").each(function(i, el) {
	    var $this = $(this);
	    setTimeout(function() {
	            $this.addClass('loaded');
	        }, i*loadDelay);
	});

	// mobile nav
	menuSelector.click(function() {
		body.toggleClass("no-scroll");
		headerNavMobile.toggleClass("header-nav-mobile-visible");
		menuSelector.toggleClass("menu-selector-open");
		menuTopBar.toggleClass("top-bar-close");
		menuMiddleBar.toggleClass("middle-bar-close");
		menuBottomBar.toggleClass("bottom-bar-close");
	});
});
