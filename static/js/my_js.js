// Navbar Design

$(".navbar-nav .nav-link").on("click", function () {
  $(this).parent().addClass("active");
  $(this).parent().siblings().removeClass("active");
});

//===== Init AOS js

$(document).ready(function () {
  AOS.init({
    duration: 1200,
  });
});

// new WOW().init();

// Scroll to top icon

$("body").prepend(`<div class="go-top go-top-btn">
					<i class="fas fa-long-arrow-alt-up"></i>
				</div>`);

$(window).on("scroll", function () {
  var scrolled = $(window).scrollTop();
  // if (scrolled < 300) $('.go-top').removeClass('active');
  // if (scrolled > 300) $('.go-top').addClass('active');

  if ($(window).scrollTop() > 300) {
    $(".go-top").addClass("active");
  } else {
    $(".go-top").removeClass("active");
  }
});

$(".go-top").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: "0",
    },
    1200
  );
});

// Fix Header on Page Scroll

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});

 // page scroll one page links

$(document).ready(function(){
  let scroll_link = $('.scroll');
 
   //smooth scrolling -----------------------
   scroll_link.click(function(e){
       e.preventDefault();
       let url = $('body').find($(this).attr('href')).offset().top;
       $('html, body').animate({
         scrollTop : url
       },700);
       $(this).parent().addClass('active');
       $(this).parent().siblings().removeClass('active');
       return false;	
    });
 });


// Gallery Page Design

$(".portfolio-menu ul li").click(function () {
  $(".portfolio-menu ul li").removeClass("active");
  $(this).addClass("active");
  var selector = $(this).attr("data-filter");
  $(".portfolio-item").isotope({
    filter: selector,
  });
  return false;
});

$(document).ready(function () {
  var popup_btn = $(".popup-btn");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// $(document).ready(function() {
//   $('.gallery').each(function() { // the containers for all your galleries
//         $(this).magnificPopup({
//             delegate: 'a', // the selector for gallery item
//             type: 'image',
//             gallery: {
//               enabled:true
//             }
//         });
//     });

// });

// Thumbnail Slick Slider

$(".slider_1").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
});



$(".service_slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
});


$(".testimonial_slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
    {
        breakpoint: 575,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
});



$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: true,
  asNavFor: ".slider-nav, .slider-nav1",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for, .slider-nav1",
  dots: false,
  arrows: false,
  vertical: true,
  // centerMode: true,
  // centerPadding: "5px",
  infinite: true,
  focusOnSelect: true,
});
$(".slider-nav1").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: ".slider-for, .slider-nav",
  dots: false,
  focusOnSelect: true,
});

$("a[data-slide]").click(function (e) {
  e.preventDefault();
  var slideno = $(this).data("slide");
  $(".slider-nav").slick("slickGoTo", slideno - 1);
});


$(".slider-for").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  // fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  asNavFor: ".slider-for",
  dots: false,
  focusOnSelect: true,
  verticalSwiping: true,
});


// filter gallery start
