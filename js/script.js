$(document).ready(function() {



	// non-DOM variables
	loadDelay = 100

	// DOM variables
	menuSelector = $(".menu-selector");
	body = $("body");
	headerTitle = $(".header > h2");
	footer = $("footer");
	menu = $("#menu");
	headerMain = $('.header-main');

	// site wide
	headerTitle.addClass("loaded-x");
	headerMain.addClass("header-main-loaded");
	// body.removeClass("preload");

	// intro page
	$('.intro > img').addClass("loaded");
	$('.intro > h1').addClass("loaded");
	$('.intro > p').addClass("loaded");
	$('.button-intro').addClass("loaded");

	// work post
	$('.work-post-intro-desc > p').addClass("loaded");

	// blog post
	$('.blog-post-intro-desc > img').addClass("loaded");

	// blog post overview
	$('.blog-post-preview-empty').addClass("loaded");

	// about page
	$('.about p').addClass("loaded");

	$('.notification').addClass("loaded");


	$(".close").click(function(){

		$('.notification').removeClass("loaded");
	});


	$(function (){
	    if ($('body.has-footer-nav').length > 0){

			var didScroll;
			lastScrollTop = 0;
			delta = 5;
			projectNav = $('.project-nav');
			introArrow = $('.intro-arrow');
			navHeight = projectNav.outerHeight();

			$(window).scroll(function(event){
				didScroll = true;
			});

			setInterval(function() {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, 250);

			function hasScrolled() {

				var posFooter = footer.offset().top; // find the current position of the top of the footer
				var posNav = projectNav.offset().top + 44; // find the bottom of the project nav
				var currentScrollTop = $(this).scrollTop(); // find the current top of vertical scrollbar

				if(Math.abs(lastScrollTop - currentScrollTop) <= delta) // minus last scroll position with current scroll position and make sure it's <= to delta
					return;

				if (currentScrollTop > lastScrollTop && currentScrollTop > navHeight){
					projectNav.addClass('project-nav-up');
					introArrow.addClass('intro-arrow-hidden');
				} else if (currentScrollTop < 44) {
					projectNav.removeClass('project-nav-up');
					introArrow.removeClass('intro-arrow-hidden');
				}

				if (posNav > posFooter) {
					projectNav.removeClass('project-nav-up');
				} else if (posNav < posFooter && currentScrollTop > navHeight) {
					projectNav.addClass('project-nav-up');
				}
				lastScrollTop = currentScrollTop;
			}
	    }
	});

	// work item tile load-in
	$(".work-item").each(function(i, el) {
    var $this = $(this);
    setTimeout(function() {
            $this.addClass('loaded');
        }, i*loadDelay);
	});

	// $(".about p").each(function(i, el) {
    // var $this = $(this);
    // setTimeout(function() {
    //         $this.addClass('loaded');
    //     }, i*loadDelay);
	// });

	// post item load-in
	$(".blog-post-preview").each(function(i, el) {
	var $this = $(this);
	setTimeout(function() {
			$this.addClass('loaded');
		}, i*loadDelay);
	});

	$(".menu-items-link").click(function (e) {

		e.preventDefault();                   // prevent default anchor behavior
		$(menuSelector).toggleClass("menu-selector-open");

		$(".menu-top-bar").toggleClass("top-bar-close");
		$(".menu-middle-bar").toggleClass("middle-bar-close");
		$(".menu-bottom-bar").toggleClass("bottom-bar-close");
		var goTo = this.getAttribute("href");
		setTimeout(function(){
	         window.location = goTo;
	    }, 300);
	});


	menuSelector.click(function() {

		body.toggleClass("no-scroll");

		menu.toggleClass("menu-visible");
		$(".menu-items li:nth-of-type(1)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(2)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(3)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(4)").toggleClass("menu-item-loaded");

		menuSelector.toggleClass("menu-selector-open");
		$(".menu-top-bar").toggleClass("top-bar-close");
		$(".menu-middle-bar").toggleClass("middle-bar-close");
		$(".menu-bottom-bar").toggleClass("bottom-bar-close");
	});



	footer.addClass('loaded-o');
});
