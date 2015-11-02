$(document).ready(function() {

	// Common Variables
	menuSelector = $(".menu-selector");
	content = $(".content")
	headerItems = $(".header-items")
	main = $(".main")
	body = $("body")
	menuItem = $(".menu-item")
	headerTitle = $(".header > h2")

	loadDelay = 150


	$('.loader').addClass("loader-finished");

	headerTitle.addClass("loaded-x");

	$('.intro > img').addClass("loaded");
	$('.intro > h1').addClass("loaded");
	$('.intro > p').addClass("loaded");
	$('.button-intro').addClass("loaded");


	// $('.about > p').addClass("loaded");

	$('.work-post-intro-desc > p').addClass("loaded");
	$('.blog-post-intro-desc > img').addClass("loaded");
	$('.blog-post-preview-empty').addClass("loaded");

	$('.header-main').addClass("header-main-loaded");
	// receding footer
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navHeight = $('.project-nav').outerHeight();

	// function loop() {
	//     $('.work-splash-arrow').animate({'transform': 'translateY(-20px)'}, {
	//         duration: 500,
	//         complete: function() {
	//             $('.work-splash-arrow').animate({'transform': 'translateY(0px)'}, {
	//                 duration: 1000,
	//                 complete: loop});
	//         }});
	// }
	// loop();


	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	var footer = $("footer")
	var nav = $(".project-nav");

	function hasScrolled() {

		var posFooter = footer.offset().top;
		console.log(posFooter + "footer");

		//this is causing error
		var posNav = nav.offset().top + 44;
		console.log(posNav + "nav");

		var st = $(this).scrollTop();
		// console.log(st);
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;

	    // If they scrolled down and are past the navbar height, add class .project-nav-up.
	    if (st > lastScrollTop && st > navHeight){
	        // Scroll Down
	        $('.project-nav').addClass('project-nav-up');
			$('.intro-arrow').addClass('intro-arrow-hidden');
	    } else if (st < 44) {
			$('.project-nav').removeClass('project-nav-up');
			$('.intro-arrow').removeClass('intro-arrow-hidden');
		}

		if (posNav > posFooter) {
	        $('.project-nav').removeClass('project-nav-up');
	    } else if (posNav < posFooter && st > navHeight) {
			$('.project-nav').addClass('project-nav-up');
		}
	    lastScrollTop = st;
	}


	// work item tile load-in
	$("li.work-item").each(function(i, el) {
    var $this = $(this);
    setTimeout(function() {
            $this.addClass('loaded');
        }, i*loadDelay);
	});

	$(".about p").each(function(i, el) {
    var $this = $(this);
    setTimeout(function() {
            $this.addClass('loaded');
        }, i*loadDelay);
	});

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

		$("#menu").toggleClass("menu-visible");
		$(".menu-items li:nth-of-type(1)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(2)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(3)").toggleClass("menu-item-loaded");
		$(".menu-items li:nth-of-type(4)").toggleClass("menu-item-loaded");

		$(menuSelector).toggleClass("menu-selector-open");
		$(".menu-top-bar").toggleClass("top-bar-close");
		$(".menu-middle-bar").toggleClass("middle-bar-close");
		$(".menu-bottom-bar").toggleClass("bottom-bar-close");

		body.toggleClass("no-scroll");



	});



	footer.addClass('loaded-o');
});
