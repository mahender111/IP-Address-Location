/*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

// Init slick slider + animation

$(document).ready(function() {

$('.slider_1').slick({
   autoplay: true,
   speed: 1500,
   lazyLoad: 'progressive',
   arrows: true,
   dots: false,
   responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            vertical: false,
            verticalSwiping: false
          }
        }
      ],
    pauseOnDotsHover:true,
    cssEase: 'linear',
	// prevArrow: '<div class="slick-nav prev-arrow hoverable"><i></i><svg><use xlink:href="#circle"></svg></div>',
	// nextArrow: '<div class="slick-nav next-arrow hoverable"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



// $('.slider_1 .slick-nav').on('click touch', function(e) {

//     e.preventDefault();

//     var arrow = $(this);

//     if(!arrow.hasClass('animate')) {
//         arrow.addClass('animate');
//         setTimeout(() => {
//             arrow.removeClass('animate');
//         }, 1600);
//     }

// });


});
