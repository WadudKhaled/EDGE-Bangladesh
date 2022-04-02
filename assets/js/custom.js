(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("sticky");
        } else {
            $(".navbar-area .main-nav").removeClass("sticky");
        }
    });

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    $(".main-banner").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        loop: true,
        autoplay: true,
        dots: false,
        items: 1,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });

    $(".banner-slider-area").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: false,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1.5,
                center: true,
            },
            992: {
                items: 1.5,
            },
          },
    });

    $(".service-slider-area").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: true,
        margin: 20,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          }
        },
    });

    $(".testimonial-slider-area").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: true,
        margin: 30,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          }
        },
    });
    
    $(".partner-slider-area").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 3,
                margin: 50,
            },
            768: {
                items: 4,
                margin: 100,
            },
            992: {
                items: 5,
                margin: 100,
            }
        },
    });

    $(".video-popup").magnificPopup({
        type: "iframe",
    });
    //   $(".image-popup").magnificPopup({
    //     type: "image",
    //   });
    //   $('.gallery-item').magnificPopup({
    //     type: 'image',
    //     gallery:{
    //       enabled:true
    //     }
    //   });

    // language select
    $(".language-select select").niceSelect();

    // countdown
    $("#getting-started-d").countdown("2021/10/05", function (event) {
        $(this).html(
        event.strftime("<div><span>%D</span> <span>Days </span> </div> ")
        );
    });
    $("#getting-started-h").countdown("2021/10/05", function (event) {
        $(this).html(
        event.strftime("<div><span>%H</span> <span>Hours </span> </div> ")
        );
    });
    $("#getting-started-m").countdown("2021/10/05", function (event) {
        $(this).html(
        event.strftime("<div><span>%M</span> <span>minutes </span> </div> ")
        );
    });
    $("#getting-started-s").countdown("22021/10/05", function (event) {
        $(this).html(
        event.strftime("<div><span>%S</span> <span>second </span> </div> ")
        );
    });
    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });


    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

})(jQuery);