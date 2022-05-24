'use strict'
$(document).ready(function(){
$('.slider').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-next"></button>',
  prevArrow: '<button type=""button class="slick-prev"></button>',
  responsive: [
    {
      breakpoint: 779,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
});