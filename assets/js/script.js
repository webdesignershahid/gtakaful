(function ($) {
    "use strict";

    var slopeADV = {
        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            function cloneMobileMenu($cloneItem, $appendTo) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($appendTo);                
            }
            cloneMobileMenu(".gt__header__bottom .gt__mainmenu", ".gt__expanded__menu .main__menu");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
                var navLink = $('.mobile-menu .nav a');
                navLink.on("click", function() {
                    $(actionSelector).removeClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.hamburger, .close-menu', '.gt__expanded__menu');  
            	
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 150) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var services_slider = new Swiper('.services_slider', {
                slidesPerView: 1.5,
                spaceBetween: 15,
                autoplay: {
                    delay: 5000,
                },
                loop: 1,
                speed: 1000,
                centeredSlides: 1,
                disableOnInteraction: 1,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                    },
                    1360: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }
            }); 
            var events__slider = new Swiper('.events__slider', {
                slidesPerView: 1.5,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
                allowTouchMove: !1,
                loop: 1,
                speed: 1000,
                centeredSlides: 1,
                disableOnInteraction: 1,
                slideToClickedSlide: 1,
                breakpoints: {
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1300: {
                        slidesPerView: 3.5,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
            });
        },
        liveChat: function(){
            $('body').append(
                `<a href='#' id='livechat' class='crisp-client' aria-label='Livechat'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                </a>`
            );
        },

        initialize: function() {
			slopeADV.mobile_menu();
			slopeADV.sticky_header();
			slopeADV.swiperCarousel();           
			slopeADV.liveChat();            
		}
    };
    $(function() {
		slopeADV.initialize();
	});

})(jQuery);

/* ============================================================ */
/* PRELOADER
/* ============================================================ */
$(window).on('load', function() {
    $(".preloader").fadeOut();     
});


/* ============================================================ */
/* Active Hover 
/* ============================================================ */
$(".gt__service__action .item").hover(function () {
    $(".gt__service__action .item").removeClass("item-hover");
    $(this).addClass("item-hover");
});
$(".gt__family_section .action-cols a").hover(function () {
    $(".gt__family_section .action-cols a").removeClass("hover");
    $(this).addClass("hover");
});

// wow Js
wow = new WOW({
    resetAnimation: true,
});
wow.init();