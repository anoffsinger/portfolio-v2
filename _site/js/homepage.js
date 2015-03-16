$(document).ready(function() {

    // $(".project-list-all").hide();

    particlesJS('particles-js', {
        particles: {
            color: '#FFD4CA',
            shape: 'circle',
            opacity: 1,
            size: 1,
            size_random: false,
            nb: 100,
            line_linked: {
                enable_auto: true,
                distance: 500,
                color: '#FFD4CA',
                opacity: .5,
                width: 1,
                condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 1
            }
        },
        interactivity: {
            enable: false,
            mouse: {
                distance: 250
            },
            detect_on: 'canvas',
            mode: 'grab',
            line_linked: {
                opacity: 0.5
            },
            events: {
                onclick: {
                    push_particles: {
                        enable: true,
                        nb: 30
                    }
                }
            }
        },
        retina_detect: true
    });

// Logo Flip
    // var sOffset = $(".flip-container").offset().top;  //find top of logo
    // var shareheight = $(".flip-container").height(); //find height of logo
    // var $document = $(document);
    // var $flipper = $(".flip-container .flipper");
    //
    $(window).scroll(function() {
        // var scrollYpos = $document.scrollTop();
        // var direction = scrollYpos > 0? "180deg" : "0deg"; //questionmark is shorthand if
        //
        // $flipper.css("-webkit-transform", "rotateY("+direction+")");
        $("canvas").css({'opacity':( 400-$(window).scrollTop() )/100});
    });

// See More
    var $allProjects = $(".project-list-all");
    var $allButton = $(".button-see-all");

    $allButton.click(function() {
        $allProjects.slideToggle();
        $(this).text(function(i, text){
            return text === "See More" ? "See Less" : "See More";
        })
    });

    if (window.location.hash === "#work") {
        $allProjects.slideToggle();
        $allButton.text(function(i, text){
            return text === "See More" ? "See Less" : "See More";
        })
    }
});
