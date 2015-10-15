$(document).ready(function() {

	// Common Variables
	menuSelector = $(".menu-selector");
	overlay = $(".content-overlay");
	// nav = $("nav")
	// canvas = $("canvas")
	content = $(".content")
	headerItems = $(".header-items")
	main = $(".main")
	body = $("body")
	menuItem = $(".menu-item")
	headerTitle = $(".header-title > h2")

	// receding header
	// var didScroll;
	// var lastScrollTop = 0;
	// var delta = 5;
	// var navbarHeight = $('header').outerHeight();

	// $(window).scroll(function(event){
	//     didScroll = true;
	// });

	headerTitle.addClass("header-title-loaded");
	headerTitle.addClass("header-title-loaded");
	$('.intro > img').addClass("intro-loaded");
	$('.intro > h1').addClass("intro-loaded");
	$('.intro > p').addClass("intro-loaded");
	$('.button-intro').addClass("intro-loaded");
	$('.loader').addClass("loader-finished");


	// setInterval(function() {
	//     if (didScroll) {
	//         hasScrolled();
	//         didScroll = false;
	//     }
	// }, 250);

	// function hasScrolled() {
	//     var st = $(this).scrollTop();
	//
	//     // Make sure they scroll more than delta
	//     if(Math.abs(lastScrollTop - st) <= delta)
	//         return;
	//
	//     // If they scrolled down and are past the navbar, add class .nav-up.
	//     // This is necessary so you never see what is "behind" the navbar.
	//     if (st > lastScrollTop && st > navbarHeight){
	//         // Scroll Down
	//         $('header').removeClass('nav-down').addClass('nav-up');
	//     } else {
	//         // Scroll Up
	//         if(st + $(window).height() < $(document).height()) {
	//             $('header').removeClass('nav-up').addClass('nav-down');
	//         }
	//     }
	//
	//     lastScrollTop = st;
	// }


	// work item tile load-in
	$("li.work-item").each(function(i, el) {
    var $this = $(this);
    setTimeout(function() {
            $this.addClass('work-item-loaded');
        }, i*150);
	});

	// post item load-in
	$(".blog-post-preview").each(function(i, el) {
	var $this = $(this);
	setTimeout(function() {
			$this.addClass('work-item-loaded');
		}, i*100);
	});


	$(".nav-items-link").click(function (e) {

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
		 // store anchor href
	// 	headerTitle.hide();
		// menuSelector.toggleClass("open");
		// nav.toggleClass("nav-open");
		// overlay.toggleClass("open");
		// canvas.toggleClass("open");
		// content.toggleClass("open");
		// headerItems.toggleClass("open");
		// main.toggleClass("open");
		// body.toggleClass("no-scroll");
		// $(".intro").toggleClass("open");
		// $(".post-content").toggleClass("open");
		// menuSelector.toggleClass("menu-selector-open");
		// $(".project-nav").toggleClass("open");
		// $('.post-header').toggleClass('open');

		// if (overlay.css('display') == "none") {
		// 	overlay.css("display","block");
		// 	overlay.fadeTo(300, .85);
		//
		// } else {
		// 	overlay.fadeTo(300, 0);
		// 	setTimeout(function() {
		// 		overlay.css("display","none");
		// 	},300);
		// }
		//
		// $(".menu-top-bar").toggleClass("top-bar-close");
		// $(".menu-middle-bar").toggleClass("middle-bar-close");
		// $(".menu-bottom-bar").toggleClass("bottom-bar-close");





	// overlay.click(function() {
	// 	overlay.fadeTo(300, 0);
	// 	setTimeout(function() {
	// 		overlay.css("display","none");
	// 	},300);
	//
	// 	// menuSelector.toggleClass("open");
	// 	nav.toggleClass("nav-open");
	// 	// overlay.toggleClass("open");
	// 	canvas.toggleClass("open");
	// 	// content.toggleClass("open");
	// 	headerItems.toggleClass("open");
	// 	main.toggleClass("open");
	// 	body.toggleClass("no-scroll");
	// 	$(".intro").toggleClass("open");
	// 	$(".post-content").toggleClass("open");
	// 	menuSelector.toggleClass("menu-selector-open");
	// 	$(".project-nav").toggleClass("open");
	//
	// 	$(".menu-top-bar").toggleClass("top-bar-close");
	// 	$(".menu-middle-bar").toggleClass("middle-bar-close");
	// 	$(".menu-bottom-bar").toggleClass("bottom-bar-close");
	//
	// 	$('.menu-items').toggleClass('slide-in');
	// 	$('.post-header').toggleClass('open');
	// });

	menuSelector.click(function() {

		$("#menu").toggleClass("menu-visible");
		$(".nav-items li:nth-of-type(1)").toggleClass("nav-item-loaded");
		$(".nav-items li:nth-of-type(2)").toggleClass("nav-item-loaded");
		$(".nav-items li:nth-of-type(3)").toggleClass("nav-item-loaded");
		$(".nav-items li:nth-of-type(4)").toggleClass("nav-item-loaded");

		$(menuSelector).toggleClass("menu-selector-open");
		$(".menu-top-bar").toggleClass("top-bar-close");
		$(".menu-middle-bar").toggleClass("middle-bar-close");
		$(".menu-bottom-bar").toggleClass("bottom-bar-close");

		body.toggleClass("no-scroll");


		// menuSelector.toggleClass("open");
		// nav.toggleClass("nav-open");
		// // overlay.toggleClass("open");
		// canvas.toggleClass("open");
		// // content.toggleClass("open");
		// headerItems.toggleClass("open");
		// main.toggleClass("open");
		// body.toggleClass("no-scroll");
		// $(".intro").toggleClass("open");
		// $(".post-content").toggleClass("open");
		// menuSelector.toggleClass("menu-selector-open");
		// $(".project-nav").toggleClass("open");
		// $('.post-header').toggleClass('open');
		//
		// if (overlay.css('display') == "none") {
		// 	overlay.css("display","block");
		// 	overlay.fadeTo(300, .85);
		//
		// } else {
		// 	overlay.fadeTo(300, 0);
		// 	setTimeout(function() {
		// 		overlay.css("display","none");
		// 	},300);
		// }



		// var url = window.location.href; // Get current url
		// console.log(url);
		// $('a[href="'+url+'"]').toggleClass('menu-active');

		// Select an a element that has the matching href and apply a class of 'active'. Also prepend a - to the content of the link

		// $('.menu-items').toggleClass('slide-in');
	});

	// Download project documentation button
	// $(".project-nav-download-bubble").hide().delay("1000").fadeToggle("1000", function() {
    //     $(this).delay("3000").fadeToggle("1000");
    // });

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

	// $.simpleWeather({
	// 	location: 'San Francisco, CA',
	// 	woeid: '',
	// 	unit: 'f',
	// 	success: function(weather) {
	// 	html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
	//
	// 	$("#weather").html(html);
	// 	},
	// 	error: function(error) {
	// 	$("#weather").html('<p>'+error+'</p>');
	// 	}
	// });

	// Check all elements with a .target class against all images on a page
	// BackgroundCheck.init({
	// targets: '.bar'
	// });

	// Specific images
	// BackgroundCheck.init({
	// targets: '.bar',
	// images: '.check-me'
	// });

	// All targets
	// BackgroundCheck.refresh();

	// Specific target
	// BackgroundCheck.refresh(target);

	// Get current targets
	// BackgroundCheck.get('targets');
	//
	// // Change targets
	// BackgroundCheck.set('targets', '.header');

});
