;
(function ($) {
    "use strict";
    $(document).on('ready', function () {
        
        
     


        /*--Primary-Menu-Dropdown-Plus-Icon--*/
        $('.primary-menu .sub-menu').parent('li').children('a').append('<i class="plus"></i>');

        $('.portfolio-items').masonry({
            // options
            itemSelector: '.portfolio-item',
        });
 
        /*-- Mobile-Menu-Active --*/
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '.menu-triger',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });


        /*-- Click-Smoth-Scroll-Script --*/
        $('.mainmenu-area a[href*="#"]')
            .not('[href="#"]')
            .not('[href="#0"]')
            .on('click', function (event) {
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    });

    $(window).on("load", function () {

        /*-- Preloader-Fade-Out-After-Load-Window --*/
        $('.preloader').fadeOut();

        $('#scrollUp').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        $('.menu-triger').on('click', function () {
            $(this).toggleClass('active');
        });

        /*---------------------------
        MICHIMP INTEGRATION
        -----------------------------*/
        /*-- Mail-Chimp Integration--*/
        $('#mc-form').ajaxChimp({
            url: 'http://www.devitfamily.us14.list-manage.com/subscribe/post?u=b2a3f199e321346f8785d48fb&amp;id=d0323b0697', //Set Your Mailchamp URL
            callback: function (resp) {
                if (resp.result === 'success') {
                    $('#mc-form input[type="EMAIL"], #mc-form button[type="submit"]').fadeOut();
                }
            }
        });

    });

    
 /*-- sponsor-Slider-Active --*/
 $('.sponsor-slider').slick({
    dots: false,
    arrows: false,
    prevArrow: '<button class="slick-prev"  type="button"><i class="zmdi zmdi-long-arrow-left"></i></button>',
    nextArrow: '<button class="slick-next" type="button"><i class="zmdi zmdi-long-arrow-right"></i></button>',
    infinite: true,
    centerMode: false,
    autoplay: false,
    vertical: false,
    verticalSwiping: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) { // If page is scrolled more than 50px
            $('#scrollUp').addClass('active'); // Fade in the arrow
        } else {
            $('#scrollUp').removeClass('active'); // Else fade out the arrow   
        }
    });
    
    $(window).on("load",function(){
        
        /*-- WoW-Animation-JS --*/
        new WOW().init();
        
        $('.primary-menu').slicknav({
            label: '',
            duration: 500,
            prependTo: '',
            closedSymbol: '<i class="fa fa-angle-right"></i>',
            openedSymbol: '<i class="fa fa-angle-right"></i>',
            appendTo: '.mainmenu-area',
            menuButton: '',
            closeOnClick: 'true' // Close menu when a link is clicked.
        });
      
        
        
        
    });

})(jQuery);

