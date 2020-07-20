(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    var navcollapse = $('.main-menu .navigation li');
    navcollapse.hover(function() {
        $(this).children('.submenu').stop(true, false, true).slideToggle(300);
    });
    //Submenu Dropdown Toggle
    if ($('.main-menu .mobile-menu li.dropdown ul').length) {
        $('.main-menu .mobile-menu li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-menu .mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });
    }

    function stickyHeader() {
        if ($('.stricky').length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $('.stricky').removeClass('fadeIn animated');
                $('.stricky').addClass('stricky-fixed fadeInDown animated');
                $('.scroll-to-top').fadeIn(500);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $('.stricky').removeClass('stricky-fixed fadeInDown animated');
                $('.stricky').addClass('slideIn animated');
                $('.scroll-to-top').fadeOut(500);
            }
        };
    }

    // 27. Select menu 
    function selectDropdown() {
        if ($(".selectmenu").length) {
            $(".selectmenu").selectmenu();

            var changeSelectMenu = function(event, item) {
                $(this).trigger('change', item);
            };
            $(".selectmenu").selectmenu({ change: changeSelectMenu });
        };
    }


    //Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            if (windowpos >= 150) {
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    //Search Box Toggle
    if ($('.search-toggle').length) {
        //Dropdown Button
        $('.search-toggle').on('click', function() {
            $(this).toggleClass('active');
            $(this).next('.search-box').toggleClass('now-visible');
        });
    }


    //Hidden Bar Toggler
    function hiddenBarToggler() {
        if ($('.hidden-bar-closer').length) {
            $('.hidden-bar-closer').on('click', function() {
                $('.hidden-bar').removeClass('visible-sidebar');
            });
        }
        if ($('.hidden-bar-opener').length) {
            $('.hidden-bar-opener').on('click', function() {
                $('.hidden-bar').addClass('visible-sidebar');
            });
        }
    }


    //Four Column Carousel Slider
    if ($('.four-column-carousel').length) {
        $('.four-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 2000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1070: {
                    items: 4
                }
            }
        });
    }


    // single-item-carousel
    if ($('.single-item-carousel').length) {
        $('.single-item-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    // single-item-carousel
    if ($('.slider-two').length) {
        $('.slider-two').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }


    //Three Column Carousel Slider
    if ($('.three-column-carousel').length) {
        $('.three-column-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }


    // single-item-carousel
    if ($('.single-item-carousel-overlay').length) {
        $('.single-item-carousel-overlay').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }


    //Three Column Carousel Slider
    if ($('.carousel-style-three').length) {
        $('.carousel-style-three').owlCarousel({
            loop: true,
            margin: 8,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    //Three Column Carousel Slider
    if ($('.carousel-style-four').length) {
        $('.carousel-style-four').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }


    // 4. select menu
    function selectMenu() {
        if ($('.select-menu').length) {
            $('.select-menu').selectmenu();
        };
    }


    function priceFilter() {
        if ($('.range-slider-price').length) {

            var priceRange = document.getElementById('range-slider-price');

            noUiSlider.create(priceRange, {
                start: [30, 80],
                limit: 99,
                behaviour: 'drag',
                connect: true,
                range: {
                    'min': 30,
                    'max': 99
                }
            });

            var limitFieldMin = document.getElementById('min-value-rangeslider');
            var limitFieldMax = document.getElementById('max-value-rangeslider');

            priceRange.noUiSlider.on('update', function(values, handle) {
                (handle ? limitFieldMax : limitFieldMin).value = values[handle];
            });
        };
    }


    //Main BX-Slider
    if ($('.box-slide').length) {
        $('.box-slide').bxSlider({

            auto: true,
            mode: 'vertical',
            nextSelector: '.single-shop #slider-next',
            prevSelector: '.single-shop #slider-prev',
            nextText: '<i class="fa fa-angle-right"></i>',
            prevText: '<i class="fa fa-angle-left"></i>',
            navText: [''],
            maxSlides: 3,
            minSlides: 3,
            moveSlides: 1,
            pause: 5000,
            speed: 700,
            pager: false
        });
    }


    //=== Cart Touch Spin ===
    function cartTouchSpin() {
        if ($('.quantity-spinner').length) {
            $("input.quantity-spinner").TouchSpin({
                verticalbuttons: true
            });
        }
    }


    function customTabProductPageTab() {
        if ($('.product-details-tab-title').length) {
            var tabWrap = $('.product-details-tab-content');
            var tabClicker = $('.product-details-tab-title ul li');

            tabWrap.children('div').hide();
            tabWrap.children('div').eq(0).show();
            tabClicker.on('click', function() {
                var tabName = $(this).data('tab-name');
                tabClicker.removeClass('active');
                $(this).addClass('active');
                var id = '#' + tabName;
                tabWrap.children('div').not(id).hide();
                tabWrap.children('div' + id).fadeIn('500');
                return false;
            });
        }
    }


    //Contact Form Validation
    if ($("#contact-form").length) {
        $("#contact-form").validate({
            submitHandler: function(form) {
                var form_btn = $(form).find('button[type="submit"]');
                var form_result_div = '#form-result';
                $(form_result_div).remove();
                form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
                var form_btn_old_msg = form_btn.html();
                form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
                $(form).ajaxSubmit({
                    dataType: 'json',
                    success: function(data) {
                        if (data.status == 'true') {
                            $(form).find('.form-control').val('');
                        }
                        form_btn.prop('disabled', false).html(form_btn_old_msg);
                        $(form_result_div).html(data.message).fadeIn('slow');
                        setTimeout(function() { $(form_result_div).fadeOut('slow') }, 6000);
                    }
                });
            }
        });
    }


    //Two Column Carousel Slider
    if ($('.two-column-carousel').length) {
        $('.two-column-carousel').owlCarousel({
            loop: true,
            margin: 2,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 2
                }
            }
        });
    }


    //Three Column Carousel Slider
    if ($('.slider-three').length) {
        $('.slider-three').owlCarousel({
            loop: true,
            margin: 2,
            nav: true,
            smartSpeed: 3000,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                800: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }

    //Main Slider Carousel
    if ($('.main-slider-carousel').length) {
        $('.main-slider-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            animateOut: 'slideOutLeft',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplay: 5000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }




    /*	=========================================================================
    When document is Scrollig, do
    ========================================================================== */

    jQuery(document).on('ready', function() {
        (function($) {
            // add your functions
            selectDropdown();
            hiddenBarToggler();
            priceFilter();
            cartTouchSpin();
            customTabProductPageTab();
        })(jQuery);
    });



    /* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

    $(window).on('scroll', function() {
        stickyHeader();
    });



    /* ==========================================================================
   When document is loaded, do
   ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });


    var scrollWindow = function() {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.probootstrap_navbar'),
                sd = $('.js-scroll-wrap');



            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }


        });
    };
    scrollWindow();

    // slick sliders
    var slickSliders = function() {
        $('.single-item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            arrows: true,
            draggable: false,
            adaptiveHeight: true
        });

        $('.single-item-no-arrow').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            arrows: false,
            draggable: false
        });

        $('.multiple-items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true,

            autoplay: true,
            autoplaySpeed: 2000,

            arrows: true,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            draggable: false,
            responsive: [{
                    breakpoint: 1125,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.js-probootstrap_slider_content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-probootstrap_slider_nav',
            adaptiveHeight: false
        });
        $('.js-probootstrap_slider_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-probootstrap_slider_content',
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            arrows: false
        });

        $('.js-probootstrap_slider_content2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-probootstrap_slider_nav2',
            adaptiveHeight: false
        });
        $('.js-probootstrap_slider_nav2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-probootstrap_slider_content2',
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            arrows: false
        });
    };
    slickSliders();

    // navigation
    var OnePageNav = function() {
        var navToggler = $('.navbar-toggler');
        $(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function(e) {
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function() {
                window.location.hash = hash;
            });
        });
        $("#probootstrap-navbar ul li a[href^='#']").on('click', function(e) {
            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });

    };
    OnePageNav();


    var ytpPlayer = function() {
        if ($('.ytp_player').length > 0) {
            $('.ytp_player').mb_YTPlayer();
        }
    }
    ytpPlayer();


    var contentWayPoint = function() {
        var i = 0;
        if ($('.probootstrap-animate').length > 0) {
            $('.probootstrap-animate').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('probootstrap-animated')) {

                    i++;

                    $(this.element).addClass('item-animate');
                    setTimeout(function() {

                        $('body .probootstrap-animate.item-animate').each(function(k) {
                            var el = $(this);
                            setTimeout(function() {
                                var effect = el.data('animate-effect');
                                if (effect === 'fadeIn') {
                                    el.addClass('fadeIn probootstrap-animated');
                                } else if (effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft probootstrap-animated');
                                } else if (effect === 'fadeInRight') {
                                    el.addClass('fadeInRight probootstrap-animated');
                                } else {
                                    el.addClass('fadeInUp probootstrap-animated');
                                }
                                el.removeClass('item-animate');
                            }, k * 50, 'easeInOutExpo');
                        });

                    }, 100);

                }

            }, { offset: '95%' });
        }
    };
    contentWayPoint();
})(window.jQuery);