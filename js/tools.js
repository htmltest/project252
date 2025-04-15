$(document).ready(function() {

    $('.land-oxygen-welcome-btn a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            var curOffset = 0;
            if ($('header').length == 1) {
                curOffset = $('header').outerHeight();
            }
            $('html, body').animate({'scrollTop': curBlock.offset().top - curOffset});
        }
        e.preventDefault();
    });

    new Swiper('.land-oxygen-catalogue-list .swiper', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        navigation: {
            nextEl: $('.land-oxygen-catalogue-list .swiper-button-next')[0],
            prevEl: $('.land-oxygen-catalogue-list .swiper-button-prev')[0],
        },
        pagination: {
            el: $('.land-oxygen-catalogue-list .swiper-pagination')[0],
            clickable: true,
        },
        breakpoints: {
            1168: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        }
    });

    if ($('header').length == 1) {
        $('.land-oxygen-wrapper').addClass('full');
    }
});

var landOxygenTechSwiper = null;

$(window).on('load resize', function() {

    $('.land-oxygen-techs-list').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landOxygenTechSwiper.destroy();
        }
        if ($(window).width() < 1168) {
            landOxygenTechSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                navigation: {
                    nextEl: $('.land-oxygen-techs-list .swiper-button-next')[0],
                    prevEl: $('.land-oxygen-techs-list .swiper-button-prev')[0],
                },
                pagination: {
                    el: curSlider.find('.swiper-pagination')[0],
                    clickable: true
                }
            });
        }
    });

});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();

    var windowWidth = $(window).width();

    $('body').append('<div id="body-test-height" style="position:fixed; left:0; top:0; right:0; bottom:0; z-index:-1"></div>');
    var windowHeight = $('#body-test-height').height();
    $('#body-test-height').remove();

    $('.land-oxygen-techs-item-1').each(function() {
        var startAnimation = $('.land-oxygen-techs-item-1').offset().top;
        var stopAnimation = $('.land-oxygen-techs-item-1').offset().top + windowHeight;
        var curPercent = 0;
        if (windowScroll + windowHeight > startAnimation) {
            if (windowScroll + windowHeight < stopAnimation) {
                curPercent = 1 - (stopAnimation - (windowScroll + windowHeight)) / (stopAnimation - startAnimation);
            } else {
                curPercent = 1;
            }
        } else {
            curPercent = 0;
        }
        $('.land-oxygen-techs-bg-1').css({'transform': 'translateY(' + (100 - curPercent * 200) + 'px)'});
    });

    $('.land-oxygen-techs-item-2').each(function() {
        var startAnimation = $('.land-oxygen-techs-item-2').offset().top;
        var stopAnimation = $('.land-oxygen-techs-item-2').offset().top + windowHeight;
        var curPercent = 0;
        if (windowScroll + windowHeight > startAnimation) {
            if (windowScroll + windowHeight < stopAnimation) {
                curPercent = 1 - (stopAnimation - (windowScroll + windowHeight)) / (stopAnimation - startAnimation);
            } else {
                curPercent = 1;
            }
        } else {
            curPercent = 0;
        }
        $('.land-oxygen-techs-bg-2').css({'transform': 'translateY(' + (100 - curPercent * 200) + 'px)'});
    });

    $('.land-oxygen-techs-item-arrow-1').each(function() {
        var startAnimation = $('.land-oxygen-techs-item-arrow-1').offset().top;
        if (windowScroll + windowHeight / 2 > startAnimation) {
            $('.land-oxygen-techs-item-arrow-1').addClass('animate');
        } else {
            $('.land-oxygen-techs-item-arrow-1').removeClass('animate');
        }
    });

    $('.land-oxygen-techs-item-arrow-2').each(function() {
        var startAnimation = $('.land-oxygen-techs-item-arrow-2').offset().top;
        if (windowScroll + windowHeight / 2 > startAnimation) {
            $('.land-oxygen-techs-item-arrow-2').addClass('animate');
        } else {
            $('.land-oxygen-techs-item-arrow-2').removeClass('animate');
        }
    });

    $('.land-oxygen-techs-item, .land-oxygen-cycle-anonce, .land-oxygen-cycle-img, .land-oxygen-cycle-steps, .land-oxygen-cycle-after').each(function() {
        var curItem = $(this);
        var startAnimation = curItem.offset().top;
        if (windowScroll + windowHeight * 0.75 > startAnimation) {
            curItem.addClass('animate');
        } else {
            curItem.removeClass('animate');
        }
    });

});